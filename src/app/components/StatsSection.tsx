"use client";
import { motion } from "framer-motion";
import React from "react";
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.3, staggerChildren: 0.2 }
};

export const StatsSection = () => {
    return (
        <section id="stats" className="py-16 bg-teal-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={stagger}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {[
                        { number: "$2.5B+", label: "Assets Under Management" },
                        { number: "150+", label: "Portfolio Companies" },
                        { number: "25+", label: "Years of Experience" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center p-8 rounded-xl bg-white shadow-sm border border-teal-100"
                        >
                            <h3 className="text-4xl font-bold text-teal-900 mb-2">{stat.number}</h3>
                            <p className="text-teal-700">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}; 