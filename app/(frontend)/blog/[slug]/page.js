
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock database of posts
const POSTS_DATA = {
    "getting-started-with-nextjs": {
        title: "Getting Started with Next.js 13+",
        content: "Next.js 13 introduced the App Router, a new way to build applications using the latest React features like Server Components...",
        date: "Oct 24, 2023"
    },
    "design-systems-guide": {
        title: "Building a Scalable Design System",
        content: "A design system is more than just a style guide. It's a collection of reusable components, standards, and documentation...",
        date: "Nov 02, 2023"
    },
    "mastering-dynamic-routing": {
        title: "Mastering Dynamic Routing",
        content: "Dynamic routes allow you to create pages that can handle variable URLs. The [slug] syntax is key to this...",
        date: "Nov 15, 2023"
    }
};

export default async function BlogPostPage({ params }) {
    // 1. AWAIT the params (Next.js 15+ requirement to allow for async params)
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // 2. Fetch data based on the slug
    const post = POSTS_DATA[slug];

    // 3. Handle 404 if post doesn't exist
    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-300">404</h1>
                <p className="text-xl text-gray-600 mb-8">Post not found: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code></p>
                <Link href="/blog" className="text-[#F2994A] hover:underline font-medium">
                    ← Back to all posts
                </Link>
            </div>
        );
    }

    // 4. Render the post content
    return (
        <article className="max-w-3xl mx-auto py-20 px-6">
            <Link href="/blog" className="inline-block mb-8 text-gray-500 hover:text-[#092C4C] transition-colors">
                ← Back to Blog
            </Link>

            <header className="mb-10">
                <div className="text-sm font-medium text-gray-500 mb-4">{post.date}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#092C4C" }}>
                    {post.title}
                </h1>
                <div className="h-1 w-20 rounded-full" style={{ backgroundColor: "#F2994A" }}></div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {/* Simulating long content */}
                <p className="mb-6 text-xl leading-relaxed">{post.content}</p>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#092C4C" }}>Why this matters</h2>
                <p className="mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </article>
    );
}