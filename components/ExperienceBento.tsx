"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Headset, Code } from "lucide-react";

export default function ExperienceBento() {
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
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
            >
                <div className="md:col-span-3 mb-4 flex items-end">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience & Education</h2>
                </div>

                {/* Flexera Global Card */}
                <motion.div variants={item} className="md:col-span-2 row-span-1 rounded-3xl bg-[#111] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-neutral-500">June 2025 - Aug 2025</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                            Flexera Global Inc.
                            <span className="text-xs px-2 py-1 bg-white/10 rounded-full font-medium text-white/70 tracking-wider uppercase backdrop-blur-sm">Data Analyst Intern</span>
                        </h3>
                        <p className="text-neutral-400">Wrote and optimized SQL scripts for DataMorphix PRIME and designed Power BI dashboards to monitor virtual agent performance.</p>
                    </div>
                </motion.div>

                {/* Texas A&M Card */}
                <motion.div variants={item} className="md:col-span-1 row-span-2 rounded-3xl bg-[#1A1A1A] border border-white/5 p-8 flex flex-col justify-between group hover:border-[#500000]/30 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#500000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start relative z-10">
                        <div className="p-3 bg-[#500000]/20 rounded-2xl w-fit">
                            <GraduationCap className="w-6 h-6 text-[#500000]" />
                        </div>
                        <span className="text-sm font-medium text-neutral-500">Class of 2027</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Texas A&M University</h3>
                        <p className="text-neutral-400 mb-2">B.B.A. Supply Chain Management.</p>
                        <p className="text-neutral-500 text-sm">Minors: AI in Business & Urban Planning.<br />GPA: 3.80</p>
                    </div>
                </motion.div>

                {/* Beats by Dre Card */}
                <motion.div variants={item} className="md:col-span-1 row-span-1 rounded-3xl bg-[#111] border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                            <Headset className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-neutral-500">Summer 2024</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Beats by Dre</h3>
                        <p className="text-neutral-400 text-sm">Data Analytics Extern</p>
                    </div>
                </motion.div>

                {/* Zentech Card */}
                <motion.div variants={item} className="md:col-span-1 row-span-1 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start relative z-10">
                        <div className="p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-neutral-500">Jan - May 2024</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-1">Zentech Inc.</h3>
                        <p className="text-neutral-400 text-sm">Business Development Intern</p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
