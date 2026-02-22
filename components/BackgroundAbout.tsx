"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    size: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
    xOffset: number;
}

export default function BackgroundAbout() {
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

    return (
        <section className="relative min-h-screen text-white w-full overflow-hidden flex flex-col justify-center">

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

            <div className="relative z-10 flex items-center justify-between px-16 md:px-32 max-w-[1600px] mx-auto w-full h-full">
                <div className="flex flex-col items-start w-full md:w-2/3 lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-24 text-[#D4AF37]"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-lg"
                    >
                        Growing up, I was always fascinated by how things move, from people and products to the decisions and systems that make everything arrive at the right place at the right time. I loved breaking big problems into smaller pieces, organizing information, and finding ways to make everyday tasks more efficient. Over time, that curiosity became a passion for supply chain management. Today, I am especially interested in how data, collaboration, and smart planning can reduce waste, cut delays, and create smoother experiences for businesses and customers.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
