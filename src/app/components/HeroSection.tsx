"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroData } from "../data/data";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 md:py-56 overflow-hidden flex flex-col justify-center">
      {/* Creative Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Subtle Background Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-32 md:px-12 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-[2.9rem] sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-shadow-xl heading-font">
            {heroData.heading}
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 mb-8 leading-relaxed max-w-3xl mx-auto heading-font text-shadow-l">
            {heroData.description}
          </p>
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {heroData.buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  document.getElementById(button.targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-lg transition-all ease-in-out duration-300 transform hover:scale-105 normal-font ${
                  button.text === "Get Started"
                    ? "bg-white text-teal-900 hover:bg-gray-300 flex items-center gap-3 group"
                    : "border-2 border-white text-white hover:bg-white/10"
                }`}
              >
                {button.text}
                {button.text === "Get Started" && (
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
