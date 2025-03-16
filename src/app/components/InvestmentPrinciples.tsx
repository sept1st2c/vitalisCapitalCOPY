"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import { investmentPrinciplesData } from "../data/data";

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: string;
}

const PrincipleCard = ({ title, description, icon }: PrincipleCardProps) => (
  <motion.div
    variants={fadeIn("up", 0.2)}
    className="group relative bg-gray-900/10 h-full p-8 rounded-xl border border-teal-900/30 hover:border-gray-900 hover:bg-gray-800 transition-all duration-500 shadow-md hover:shadow-xl"
  >
    <div
      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      style={{
        backgroundImage: `url(${icon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
      }}
    ></div>
    <div className="flex flex-col h-full relative z-10">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 group-hover:text-white transition-colors heading-font text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-100 text-semibold transition-colors body-font text-center">
        {description}
      </p>
    </div>
  </motion.div>
);

export const InvestmentPrinciples = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-teal-50">
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <hr className="border-t-2 border-white w-1/2 opacity-40 -translate-y-20 hidden md:block" />
      </motion.div>
      <section
        id="investment-principles"
        className="relative pt-10 pb-32 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mt-12 leading-relaxed body-font">
                {investmentPrinciplesData.introText}
              </p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 mt-12 text-gray-900 heading-font">
                Investment Principles
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentPrinciplesData.principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <PrincipleCard {...principle} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
