"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Users, Tent } from "lucide-react";

export default function LifeGrid() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
            >
                <div className="md:col-span-3 mb-4 flex items-end">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Leadership & Life</h2>
                </div>

                <motion.div variants={item} className="rounded-3xl bg-[#0A1A1A] border border-[#00FFF0]/10 p-8 flex flex-col justify-between group hover:border-[#00FFF0]/30 transition-colors">
                    <div className="p-3 bg-[#00FFF0]/10 rounded-2xl w-fit group-hover:bg-[#00FFF0]/20 transition-colors">
                        <ShieldCheck className="w-6 h-6 text-[#00FFF0]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Cybersecurity Club</h3>
                        <p className="text-[#00FFF0]/70 text-sm">Texas A&M Chapter. Improving enrollment and participation in digital frontier defenses.</p>
                    </div>
                </motion.div>

                <motion.div variants={item} className="rounded-3xl bg-[#1A1A0A] border border-[#FFFF00]/10 p-8 flex flex-col justify-between group hover:border-[#FFFF00]/30 transition-colors">
                    <div className="p-3 bg-[#FFFF00]/10 rounded-2xl w-fit group-hover:bg-[#FFFF00]/20 transition-colors">
                        <Tent className="w-6 h-6 text-[#FFFF00]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Boy Scouts</h3>
                        <p className="text-[#FFFF00]/70 text-sm">Life Scout & Senior Patrol Leader. Led 200+ scouts and a 7-day sailing/scuba expedition.</p>
                    </div>
                </motion.div>

                <motion.div variants={item} className="rounded-3xl bg-[#1A0A0A] border border-[#FF0055]/10 p-8 flex flex-col justify-between group hover:border-[#FF0055]/30 transition-colors">
                    <div className="p-3 bg-[#FF0055]/10 rounded-2xl w-fit group-hover:bg-[#FF0055]/20 transition-colors">
                        <Users className="w-6 h-6 text-[#FF0055]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Basketball Coach</h3>
                        <p className="text-[#FF0055]/70 text-sm">My Home Group - Avatar. Coaching youth athletes in basketball fundamentals and wellness.</p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
