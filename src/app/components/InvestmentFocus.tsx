"use client";
import { motion } from "framer-motion";
import { Zap, Shield, ChevronRight } from "lucide-react";

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

export const InvestmentFocus = () => {
    return (
        <section id="investment-focus" className="py-20 bg-teal-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-teal-900"
                    {...fadeInUp}
                >
                    Investment Focus
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={stagger}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {[
                        {
                            title: "Technology",
                            icon: <Zap className="w-6 h-6" />,
                            items: ["Enterprise Software", "AI & Machine Learning", "Digital Infrastructure"]
                        },
                        {
                            title: "Sustainability",
                            icon: <Shield className="w-6 h-6" />,
                            items: ["Clean Energy", "Sustainable Technologies", "Climate Solutions"]
                        }
                    ].map((category, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-teal-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-teal-900">{category.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-teal-700">
                                        <ChevronRight className="w-5 h-5 text-teal-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}; 