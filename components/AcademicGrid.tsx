"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Award, Users, Gamepad2 } from "lucide-react";

const interestsData = [
    { title: "Basketball", fact: "I can dunk!" },
    { title: "Options Trading", fact: "I am looking into spreads as well!" },
    { title: "Resistance Training", fact: "I do the Arnold split!" },
    { title: "Fashion", fact: "My favorite brands are Uniqlo, Hollister, and Pacsun." },
    { title: "Traveling", fact: "I have been to United States 🇺🇸, Mexico 🇲🇽, Morocco 🇲🇦, Singapore 🇸🇬, India 🇮🇳, Canada 🇨🇦, and Puerto Rico 🇵🇷 and I am looking to study abroad soon!", colSpan: "md:col-span-2" },
    { title: "Video Games", fact: "Immortal 2 in Valorant (Top 0.3%)", isGaming: true },
    { title: "Anime", fact: "My favorite animes are Dr. Stone and Attack on Titan." }
];

interface InterestItem {
    title: string;
    fact: string;
    colSpan?: string;
    isGaming?: boolean;
}

function InterestCard({ item, variants }: { item: InterestItem, variants: Variants }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            variants={variants}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-6 border border-white/10 transition-colors duration-300 cursor-pointer rounded-sm flex flex-col items-center justify-center text-center group ${item.isGaming ? "bg-[#333] hover:bg-[#D4AF37]" : "bg-white/5 hover:bg-white/10"
                } ${item.colSpan || ""}`}
        >
            {!isOpen ? (
                <h4 className={`font-medium text-sm transition-colors duration-300 ${item.isGaming ? "text-white group-hover:text-black" : "text-white group-hover:text-[#D4AF37]"}`}>
                    {item.title} <span className="text-xs font-light block mt-1 opacity-50 text-neutral-400 group-hover:text-black">(Click to reveal)</span>
                </h4>
            ) : (
                <div className={`transition-colors duration-300 flex flex-col items-center justify-center h-full w-full ${item.isGaming ? "text-white group-hover:text-black" : "text-neutral-300 group-hover:text-white"}`}>
                    {item.isGaming ? (
                        <>
                            <h4 className="font-bold text-lg mb-1">Immortal 2</h4>
                            <p className="text-xs font-medium">Valorant (Top 0.3%)</p>
                        </>
                    ) : (
                        <p className="text-xs font-medium leading-relaxed">{item.fact}</p>
                    )}
                </div>
            )}
        </motion.div>
    );
}

export default function AcademicGrid() {
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="py-32 px-16 md:px-32 max-w-[1600px] mx-auto text-white min-h-screen">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-light mb-24 text-[#D4AF37]"
            >
                Academic Pursuit
            </motion.h2>

            <div className="space-y-20">

                {/* Certificates / Skills */}
                <div>
                    <div className="flex items-center gap-2 mb-8 text-[#6A0DAD]">
                        <Award size={18} strokeWidth={1.5} />
                        <h3 className="text-xl font-light tracking-wide text-white">Certifications & Skills</h3>
                    </div>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4"
                    >
                        {[
                            { title: "Google Data Analytics", desc: "Professional Certificate" },
                            { title: "Technical Skills", desc: "Python, SQL, Tableau" },
                            { title: "Office Suite", desc: "Advanced Excel, Power BI" },
                            { title: "Real Estate", desc: "Texas License" }
                        ].map((item, i) => (
                            <motion.div key={i} variants={itemVariants} className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-default rounded-sm">
                                <h4 className="font-medium text-sm mb-2 text-white">{item.title}</h4>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Organizations */}
                <div>
                    <div className="flex items-center gap-2 mb-8 text-[#6A0DAD]">
                        <Users size={18} strokeWidth={1.5} />
                        <h3 className="text-xl font-light tracking-wide text-white">Organizations</h3>
                    </div>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {[
                            { title: "Perplexity Campus Partner", desc: "Brand Ambassador", sub: "Increased Comet browser signups by supporting affiliate campaigns and launching 2 new campus-wide events." },
                            { title: "Texas A&M Cybersecurity Club", desc: "Activity Manager", sub: "Collaborated on outreach, streamlining meetings and driving enrollment." },
                            { title: "Boy Scouts of America", desc: "Senior Patrol Leader & Life Scout", sub: "Managed 200+ scouts, led 7-day sea expedition, and launched fundraisers." },
                            { title: "My Home Group - Avatar", desc: "Basketball Coach", sub: "Instructing youth athletes in fundamentals and personalized wellness programs." }
                        ].map((item, i) => (
                            <motion.div key={i} variants={itemVariants} className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#6A0DAD]/50 transition-all duration-300 cursor-default rounded-sm">
                                <h4 className="font-medium text-sm mb-2 text-white">{item.title}</h4>
                                <p className="text-xs text-[#D4AF37] mb-4">{item.desc}</p>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.sub}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Interests */}
                <div>
                    <div className="flex items-center gap-2 mb-8 text-[#6A0DAD]">
                        <Gamepad2 size={18} strokeWidth={1.5} />
                        <h3 className="text-xl font-light tracking-wide text-white">Interests</h3>
                    </div>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr"
                    >
                        {interestsData.map((item, i) => (
                            <InterestCard key={i} item={item} variants={itemVariants} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
