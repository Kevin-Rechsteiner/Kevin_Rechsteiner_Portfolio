'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Clock, Zap } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Footer } from "@/app/components/Footer";

export default function ProjektDetailPage() {
  const { colors } = useTheme();
  const { t, language } = useLanguage();
  const params = useParams();

  const rawSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const projectIndex = Number(rawSlug);
  const project = Number.isInteger(projectIndex) ? t.projects.items[projectIndex] : null;

  if (!project) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
        <section className="pt-32 pb-16 px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-opacity duration-200 hover:opacity-80"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={16} />
              {language === 'de' ? 'Zuruck zu Projekten' : 'Back to projects'}
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: colors.text }}>
              {language === 'de' ? 'Projekt nicht gefunden' : 'Project not found'}
            </h1>
            <p className="text-base sm:text-lg" style={{ color: colors.textSecondary }}>
              {language === 'de'
                ? 'Dieses Projekt konnte nicht geladen werden.'
                : 'This project could not be loaded.'}
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
      <section className="pt-32 pb-16 px-3 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-opacity duration-200 hover:opacity-80"
            style={{ color: colors.accent }}
          >
            <ArrowLeft size={16} />
            {language === 'de' ? 'Zuruck zu Projekten' : 'Back to projects'}
          </Link>

          <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden mb-8" style={{ border: `1px solid ${colors.border}` }}>
            <Image
              src={project.image || '/placehold.svg'}
              alt={project.title}
              width={1200}
              height={560}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: colors.text, lineHeight: '1.25' }}>
            {project.title}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl"
            style={{ color: colors.textSecondary, lineHeight: '1.8' }}
          >
            {project.desc}
          </p>
        </div>
      </section>

      <section className="pb-24 px-3 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
           {(project.comingSoon || project.inProgress) && (
             <div
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
               style={{
                 backgroundColor: `${colors.accent}20`,
                 color: colors.accent,
                 border: `1px solid ${colors.accent}40`,
               }}
             >
               {project.inProgress ? <Zap size={14} /> : <Clock size={14} />}
               {project.inProgress 
                 ? (language === 'de' ? 'In Arbeit' : 'In Progress')
                 : (language === 'de' ? 'Demnächst' : 'Coming soon')
               }
             </div>
           )}

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: colors.text }}>
            {language === 'de' ? 'Technologien' : 'Technologies'}
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.length > 0 ? project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-medium"
                style={{
                  backgroundColor: colors.bgSecondary,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {tag}
              </span>
            )) : (
              <span className="text-sm" style={{ color: colors.textSecondary }}>
                {language === 'de' ? 'Technologien folgen' : 'Technologies coming soon'}
              </span>
            )}
          </div>

          <div className="space-y-4 mb-10">
            {(project.details || []).map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg" style={{ color: colors.textSecondary, lineHeight: '1.85' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {!project.comingSoon && (
            <div className="flex flex-wrap gap-5">
              <a
                href={project.demo || '#'}
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ color: colors.accent }}
              >
                <ExternalLink size={15} />
                {t.projects.view}
              </a>
              <a
                href={project.github || '#'}
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ color: colors.textSecondary }}
              >
                <Github size={15} />
                {t.projects.code}
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

