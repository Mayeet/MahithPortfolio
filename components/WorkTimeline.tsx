"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const experiences = [
    {
        title: "Data Analyst Intern",
        company: "Flexera Global Inc.",
        date: "June 2025 \u2014 Aug 2025",
        description: "Wrote and optimized SQL scripts to extract performance logs, addressing latency issues during nightly ETL processes for energy and oil & gas clients. Designed a Power BI dashboard monitoring virtual agent performance, revealing over 50% of queries resolved automatically."
    },
    {
        title: "Extern",
        company: "Beats by Dre",
        date: "April 2025 \u2014 June 2025",
        description: "Conducted qualitative and quantitative research on Gen Z preferences by analyzing over 100 consumer reviews. Leveraged Python, NLP, and Gemini AI for sentiment analysis, visualizing feedback across 3 competitor leading audio brands."
    },
    {
        title: "Business Analyst Intern",
        company: "E3 Global",
        date: "June 2024 \u2014 July 2024",
        description: "Developed a feedback-driven evaluation system boosting satisfaction ratings by 20%. Organized 200+ survey data points into client feedback spreadsheets to yield insights for improved consulting follow-up strategies, while managing project resources via SAP IBP."
    },
    {
        title: "Business Development Intern",
        company: "Zentech Incorporated",
        date: "Jan 2024 \u2014 May 2024",
        description: "Analyzed 100,000+ data entries in Microsoft Excel to uncover client relationship trends, driving strategic recommendations for 2 major partnership decisions that improved business targeting. Boosted LinkedIn client engagement by 8% using AI-driven research methods."
    },
    {
        title: "FRI Research Assistant",
        company: "UT Austin College of Natural Sciences",
        date: "June 2023 \u2014 Aug 2023",
        description: "Led a team of 5 researchers to create 3 data-driven environmental models. Identified statistical trends in water quality, demonstrating the impacts of anthropogenic activity on urban ecosystems across Waller Creek sampling zones."
    }
];

export default function WorkTimeline() {
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section className="py-32 px-16 md:px-32 max-w-[1600px] mx-auto text-black min-h-screen flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-light mb-24 text-[#D4AF37]"
            >
                Experience
            </motion.h2>

            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-neutral-300 ml-2 md:ml-4"
            >
                {experiences.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="mb-20 last:mb-0 relative pl-10 md:pl-16">
                        {/* Dot */}
                        <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-black rounded-full" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-light tracking-tight text-white">{exp.title}</h3>
                            <span className="text-sm text-white font-light mt-1 md:mt-0">{exp.date}</span>
                        </div>

                        <h4 className="text-base text-white mb-4">{exp.company}</h4>
                        <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base max-w-2xl">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
