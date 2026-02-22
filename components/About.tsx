"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function About() {
    const [easterEggFound, setEasterEggFound] = useState(false);

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111] border border-white/5 rounded-3xl p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6">The Human Side</h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                        Beyond the screen, I am a creator, a thinker, and a leader. I believe that engineering is a tool to solve real-world human problems, and my goal is to build solutions that leave a lasting, positive impact.
                    </p>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        When I&apos;m not coding, you can find me exploring the outdoors, mentoring peers, or unwinding with a good competitive game.
                    </p>
                </div>

                <div className="bg-[#111] border border-white/5 rounded-3xl p-10 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="z-10 text-center">
                        {easterEggFound ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="p-4 bg-red-500/20 text-red-500 rounded-full mb-4">
                                    <Gamepad2 size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 cursor-default">Immortal 2</h3>
                                <p className="text-neutral-400">Valorant Rank (Top 0.3%)</p>
                            </motion.div>
                        ) : (
                            <button
                                onClick={() => setEasterEggFound(true)}
                                className="text-neutral-600 hover:text-white transition-colors cursor-pointer px-6 py-3 border border-neutral-800 hover:border-white/20 rounded-full"
                            >
                                Reveal Secret
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
