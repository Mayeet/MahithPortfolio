"use client";
import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

export default function ScrollNavigation() {
    const { scrollYProgress } = useScroll();
    const [activeIndex, setActiveIndex] = useState(0);

    // There are 6 main sections in the page: Hero, Youth, WorkTimeline, AcademicGrid, Projects, Gratitude
    const sections = [
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'work', name: 'Experience' },
        { id: 'academic', name: 'Academic' },
        { id: 'projects', name: 'Projects' },
        { id: 'gratitude', name: 'Gratitude' }
    ];

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            // Find the closest index based on the 0-1 scroll progress
            const newIndex = Math.min(
                sections.length - 1,
                Math.max(0, Math.round(latest * (sections.length - 1)))
            );
            setActiveIndex(newIndex);
        });
    }, [scrollYProgress, sections.length]);

    const scrollToSection = (id: string, index: number) => {
        setActiveIndex(index);

        // Handle 'hero' specially as it might not have an ID yet, or scroll to top
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-50 py-4 px-2 pointer-events-auto mix-blend-difference">
            {sections.map((section, i) => (
                <div key={i} className="group flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection(section.id, i)}>
                    {/* Hover Text */}
                    <span
                        className={`text-white text-sm font-light tracking-wide transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeIndex === i ? "opacity-100 translate-x-0" : ""
                            }`}
                    >
                        {section.name}
                    </span>

                    {/* Dot */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                        <div
                            className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${activeIndex === i ? "opacity-100 scale-150" : "opacity-40 group-hover:opacity-100 group-hover:scale-125"
                                }`}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
