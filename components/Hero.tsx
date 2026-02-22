"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

interface Particle {
    id: number;
    size: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
    xOffset: number;
}

export default function Hero() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 5 + 3, // 3px to 8px
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 5,
            xOffset: Math.random() * 50 - 25,
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(generatedParticles);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section className="relative h-screen flex items-center justify-between px-16 md:px-32 max-w-[1600px] mx-auto overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="z-10 flex flex-col items-start w-full md:w-1/2"
            >
                <h1 className="text-7xl md:text-[9rem] font-light leading-none tracking-tight mb-8">
                    <motion.span variants={item} className="block text-[#D4AF37]">Mahith</motion.span>
                    <motion.span variants={item} className="block text-[#D4AF37]">Gujja</motion.span>
                </h1>

                <motion.p variants={item} className="text-lg text-white max-w-sm mb-12 font-light">
                    Supply Chain Management at Texas A&amp;M University
                </motion.p>

                <motion.div variants={item}>
                    <MagneticButton
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors duration-300"
                    >
                        Projects
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: particle.left,
                            top: particle.top,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, particle.xOffset, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Right Side Abstract Graphic */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] pointer-events-none"
            >
                <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
                    <circle cx="200" cy="150" r="4" fill="black" />
                    <circle cx="350" cy="100" r="3" fill="black" />
                    <circle cx="450" cy="250" r="5" fill="black" />
                    <circle cx="600" cy="150" r="4" fill="black" />
                    <circle cx="700" cy="200" r="3" fill="black" />
                    <circle cx="300" cy="350" r="4" fill="black" />
                    <circle cx="150" cy="300" r="3" fill="black" />
                    <circle cx="500" cy="400" r="5" fill="black" />
                    <circle cx="650" cy="350" r="4" fill="black" />

                    <path d="M200 150 L350 100 L600 150 L700 200 L650 350 L500 400 L300 350 L150 300 Z" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" />
                    <path d="M350 100 L450 250 L600 150" stroke="black" strokeWidth="0.5" />
                    <path d="M200 150 L450 250 L300 350" stroke="black" strokeWidth="0.5" />
                    <path d="M450 250 L500 400" stroke="black" strokeWidth="0.5" />
                    <path d="M450 250 L650 350" stroke="black" strokeWidth="0.5" />
                    <path d="M150 300 L200 150" stroke="black" strokeWidth="0.5" />
                </svg>
            </motion.div>
        </section>
    );
}
