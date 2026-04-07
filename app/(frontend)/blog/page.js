'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/app/data/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogIndex() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-5 lg:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-bold mb-4" style={{ color: "#F2994A", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
                        BLOG & GEDANKEN
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#092C4C" }}>
                        Einblicke in meinen Lernweg
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                        Hier teile ich meine Erfahrungen, Learnings und Gedanken zu Technologie und Softwareentwicklung.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col group"
                            >
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex gap-2 mb-4">
                                        {post.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full text-xs font-bold"
                                                style={{ backgroundColor: "rgba(9, 44, 76, 0.05)", color: "#092C4C" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-[#F2994A] transition-colors" style={{ color: "#092C4C" }}>
                                        {post.title}
                                    </h2>

                                    <p className="text-sm mb-6 flex-1" style={{ color: "#4f4f4f", lineHeight: "1.6" }}>
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-sm" style={{ color: "#828282" }}>
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} /> {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} /> {post.readTime}
                                            </span>
                                        </div>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" style={{ color: "#F2994A" }} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
