"use client";
import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { ContactSection } from "../components/ContactSection";
import { advisorTeam, seniorMediaTeam, teamMembers } from "../data/data";


// @ts-expect-error: Type inference issue, expected props missing

const TeamSection = ({ title, members }) => (
  <>
  
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-16 mb-10"
    >
      {title}
    </motion.h2>
    
    <motion.div
      className="flex flex-wrap justify-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      
      {
        //@ts-expect-error: Type interface issue
      members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="w-full md:w-[300px] bg-white rounded-lg overflow-hidden shadow-md ml-6 mr-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full pt-[100%]">
            <img
              src={member.image}
              alt={member.name}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-6 bg-teal-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.designation}</p>
              </div>
              {member.linkedin !== "#" && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </>
);

const TeamPage = () => {
  return (
    <>
      <div className="bg-[#f8fafc] min-h-screen py-16 flex flex-warp items-center">
        <div className="container mx-auto px-4 py-8 mt-10 mb-10 max-w-6xl">
          
          {/* Core Team Section */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Meet Our Team
          </motion.h1>
          
          <TeamSection title="" members={teamMembers} />

          {/* Senior Media Team Section */}
          <TeamSection title="" members={seniorMediaTeam} />

          {/* Advisor Section */}
          <TeamSection title="" members={advisorTeam} />

        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default TeamPage;
