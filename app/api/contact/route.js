import { NextResponse } from 'next/server';
import BLOCKED_WORDS from '@/app/components/blocked-words';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_SUBMIT_TIME_MS = 1500;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';


const rateLimitStore = globalThis.__contactRateLimitStore || new Map();
globalThis.__contactRateLimitStore = rateLimitStore;

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return 'unknown';
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 6 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(trimmed);
}

function hasBlockedContent(text) {
  const lowered = text.toLowerCase();
  return BLOCKED_WORDS.some((word) => lowered.includes(word));
}

function validatePayload(payload) {
  const name = typeof payload?.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload?.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload?.message === 'string' ? payload.message.trim() : '';
  const website = typeof payload?.website === 'string' ? payload.website.trim() : '';
  const startedAt = Number(payload?.startedAt);
  const turnstileToken = typeof payload?.turnstileToken === 'string' ? payload.turnstileToken.trim() : '';

  if (!name || !email || !message) {
    return { ok: false, error: 'invalid_payload' };
  }

  if (name.length > 120 || message.length > 3000) {
    return { ok: false, error: 'invalid_payload' };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: 'invalid_email' };
  }

  if (!turnstileToken) {
    return { ok: false, error: 'turnstile_failed' };
  }

  if (website) {
    return { ok: false, error: 'spam_detected' };
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return { ok: false, error: 'spam_detected' };
  }

  if (hasBlockedContent(`${name} ${message}`)) {
    return { ok: false, error: 'blocked_content' };
  }

  return { ok: true, sanitized: { name, email, message, turnstileToken } };
}

async function verifyTurnstileToken(token, ip) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    return { ok: false, error: 'contact_unavailable' };
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
      remoteip: ip,
    }),
  });

  if (!response.ok) {
    return { ok: false, error: 'turnstile_failed' };
  }

  const result = await response.json().catch(() => null);
  if (!result?.success) {
    return { ok: false, error: 'turnstile_failed' };
  }

  return { ok: true };
}

function isRateLimited(ip) {
  const now = Date.now();
  const history = rateLimitStore.get(ip) || [];
  const recent = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return false;
}

export async function POST(request) {
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (!formspreeEndpoint) {
    return NextResponse.json({ ok: false, error: 'contact_unavailable' }, { status: 500 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const turnstileVerification = await verifyTurnstileToken(validation.sanitized.turnstileToken, ip);
  if (!turnstileVerification.ok) {
    return NextResponse.json({ ok: false, error: turnstileVerification.error }, { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: validation.sanitized.name,
        email: validation.sanitized.email,
        message: validation.sanitized.message,
      }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json({ ok: false, error: 'contact_unavailable' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: 'contact_unavailable' }, { status: 502 });
  }
}

