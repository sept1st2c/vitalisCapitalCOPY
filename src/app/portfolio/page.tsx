import React from "react";
import Header from "../header"; // Adjust path if necessary
import { ContactSection } from "../components/ContactSection";
import { companies, successful } from "../data/data"; // Import company data

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <section
        id="portfolio-companies"
        className="py-16 bg-gradient-to-br from-gray-100 to-teal-100 overflow-hidden mt-20"
      >
        <div className="container mx-auto px-6 py-7 mb-8">
          <h1 className="text-6xl font-bold text-center text-gray-900 mb-12 heading-font">
            Our Portfolio
          </h1>
        </div>

        {/* Current Portfolio - Grid Layout */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${company.name}-${index}`}
                className="bg-white rounded-xl p-8 flex flex-col items-center justify-between h-[300px] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-100 group"
              >
                <div className="flex items-center justify-center h-32 w-full mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-h-full max-w-[180px] object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 heading-font group-hover:text-teal-800">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed body-font group-hover:text-teal-700">
                    {company.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Successful Exits Section */}
        <div className="container mx-auto px-6 py-16 mb-8">
          <h1 className="text-5xl text-gray-800 font-semibold text-center mb-12 mt-20 heading-font decoration-teal-600">
            Successful Exits
          </h1>
        </div>

        {/* Successful Exits - Flex Layout with Wrapping */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {successful.map((company, index) => (
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${company.name}-${index}`}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-[400px] bg-white rounded-xl p-8 flex flex-col items-center justify-between h-[300px] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:bg-teal-50 group"
              >
                <div className="flex items-center justify-center h-32 w-full mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="max-h-full max-w-[180px] object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-regular text-gray-900 mb-3 heading-font group-hover:text-teal-600">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed normal-font group-hover:text-teal-700">
                    {company.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Portfolio;
