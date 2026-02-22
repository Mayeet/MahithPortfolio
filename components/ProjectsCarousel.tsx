"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

const projects = [
    {
        title: "Revv",
        subtitle: "Mobile Application and Website • 2024",
        description: "Revv is on a mission to empower automotive enthusiasts and everyday drivers with the latest news, honest reviews, and the best of car culture from around the world. We're building a passionate community, celebrating innovation, and making quality car content accessible to all.",
        technologies: "Flutter, Node.js, ReactJS, UI/UX Design, Generative AI",
        image: "/revv_logo_new.png",
        link: "https://www.joinrevv.com/",
        repo: "joinrevv"
    }
];

export default function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <section id="projects" className="py-32 px-4 md:px-16 lg:px-32 max-w-[1600px] mx-auto text-white min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-left w-full pl-8 md:pl-16 lg:pl-0 text-[#D4AF37]">
                Projects
            </h2>

            <div className="relative w-full flex items-center justify-start">
                {/* Left Arrow */}
                {projects.length > 1 && (
                    <button
                        onClick={prevProject}
                        className="absolute left-2 md:-left-8 lg:-left-16 z-10 p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/10 text-white flex items-center justify-center"
                    >
                        <ChevronLeft size={20} strokeWidth={1.5} />
                    </button>
                )}

                <div className="w-full max-w-5xl overflow-hidden relative min-h-[500px] py-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col md:flex-row w-full gap-12 md:gap-16 items-center px-8 md:px-0"
                        >
                            {/* Graphic Side */}
                            <div className="w-full md:w-1/2 aspect-square flex items-center justify-center bg-[#1e448b] relative max-h-[500px]">
                                {projects[currentIndex].title === "EcoGrid" ? (
                                    /* Placeholder for EcoGrid styling based on screenshot */
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
                                        <div className="w-full h-full border border-white/20 rounded-sm relative" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center', opacity: 0.2 }}></div>
                                        <div className="absolute text-white/50 font-light text-2xl tracking-widest">ECOGRID IMAGE</div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-black flex items-center justify-start">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={projects[currentIndex].image}
                                            alt={projects[currentIndex].title}
                                            className="w-[85%] md:w-[75%] h-auto object-contain [clip-path:inset(1.5%_0_0_0)]"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left shrink-0">
                                <span className="text-sm text-neutral-400 font-light mb-1">{projects[currentIndex].subtitle}</span>
                                <h3 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight">{projects[currentIndex].title}</h3>

                                <p className="text-neutral-300 font-light leading-relaxed mb-8 text-[15px] md:text-base max-w-md">
                                    {projects[currentIndex].description}
                                </p>

                                <div className="mb-10">
                                    <span className="text-sm text-neutral-500 font-light block mb-2">Technologies</span>
                                    <span className="text-sm md:text-base text-white font-light">{projects[currentIndex].technologies}</span>
                                </div>

                                <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 bg-white/5 text-white text-sm font-light hover:bg-white/10 transition-colors flex items-center justify-center gap-3 w-fit rounded-sm">
                                    <Github size={16} />
                                    <span>{projects[currentIndex].repo}</span>
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                {projects.length > 1 && (
                    <button
                        onClick={nextProject}
                        className="absolute right-2 md:-right-8 lg:-right-16 z-10 p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/10 text-white flex items-center justify-center"
                    >
                        <ChevronRight size={20} strokeWidth={1.5} />
                    </button>
                )}
            </div>

            {/* Dots */}
            {projects.length > 1 && (
                <div className="flex justify-center items-center gap-3 mt-8">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === i ? "bg-white" : "bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
