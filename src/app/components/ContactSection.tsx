"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, company, message } = formData;
    const mailtoLink = `mailto:info@vitaliscapital.in?subject=Contact%20Form%20Submission%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6 text-center heading-font">
              Partner With Us
            </h2>
            <p className="text-xl mb-12 text-teal-100 text-center body-font">
              Let&apos;s discuss how we can help grow your business and create
              lasting value together
            </p>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 placeholder-gray-500 normal-font"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 placeholder-gray-500 normal-font"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 placeholder-gray-500 normal-font"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 placeholder-gray-500 resize-none normal-font"
                  placeholder="Tell us about your project or investment needs"
                  value={formData.message}
                  onChange={handleChange}
                />

                <motion.button
                  type="submit"
                  className="w-full bg-teal-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors flex items-center justify-center gap-2 group normal-font"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">

          <p className="text-sm md:text-base normal-font">
            &copy; {new Date().getFullYear()} Vitalis Capital. All rights
            reserved.
          </p>
          <p className="text-sm md:text-base mt-2 text-teal-100 normal-font">
            Contact us through {" "}
            <a
              href="mailto:info@vitaliscapital.in"
              className="text-teal-300 hover:text-teal-200"
            >
              info@vitaliscapital.in
            </a>
          </p>
          <div className="flex justify-center mb-4 mt-5">
            <Image
              src="/VitalisLogo/v-teal.png"
              alt="Vitalis Capital Logo"
              width={39}
              height={13}
              className="mx-auto"
            />
          </div>
          <p className="text-sm md:text-2xl font-medium -mt-3">Vitalis</p>
          <p className="text-sm md:text-sm font-light -mb-4">Capital</p>
        </div>
      </footer>
    </>
  );
};
