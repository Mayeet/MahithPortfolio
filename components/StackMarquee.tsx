"use client";
import React from "react";

const stack = [
    "Microsoft Excel", "Access", "Word", "Power BI", "Tableau", "PowerPoint", "SQL", "SAP IBP", "Python", "Gemini AI", "Data Analysis"
];

export default function StackMarquee() {
    return (
        <section className="py-12 md:py-24 overflow-hidden bg-[#0A0A0A] border-y border-white/5">
            <div className="relative flex overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 shrink-0 pr-12">
                    {stack.map((item, index) => (
                        <span key={index} className="text-4xl md:text-6xl font-black text-transparent hover:opacity-100 transition-opacity duration-300 cursor-default" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}>
                            {item}
                        </span>
                    ))}
                </div>
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
                    {stack.map((item, index) => (
                        <span key={`dup-${index}`} className="text-4xl md:text-6xl font-black text-transparent hover:opacity-100 transition-opacity duration-300 cursor-default" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
