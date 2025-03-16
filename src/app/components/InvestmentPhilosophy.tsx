"use client";
import { motion } from "framer-motion";
import { Globe, Zap, BarChart3 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, staggerChildren: 0.2 },
};

export const InvestmentPhilosophy = () => {
  return (
    <section
      id="investment-philosophy"
      className="py-20 bg-gradient-to-b from-white to-teal-50"
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-teal-900 mb-4">
            Investment Philosophy
          </h2>
          <p className="text-xl text-teal-700 max-w-2xl mx-auto">
            Our approach combines deep industry expertise with strategic capital
            deployment
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Strategic Growth",
              desc: "Identifying and nurturing high-potential companies for sustainable success",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Value Creation",
              desc: "Hands-on approach to building lasting enterprise value",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Long-term Vision",
              desc: "Patient capital focused on sustainable growth and innovation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-teal-100"
            >
              <div className="bg-teal-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-teal-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-900">
                {item.title}
              </h3>
              <p className="text-teal-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
