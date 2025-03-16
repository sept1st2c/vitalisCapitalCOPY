"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/#principles", text: "Investment Principles" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/team", text: "Team" },
  { href: "#contact", text: "Contact" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";
  }, [isNavOpen]);

  const headerClasses = `
    fixed w-full top-0 z-[100] transition-all duration-300
    ${scrolled ? "bg-white shadow-md" : "bg-gradient-to-r from-gray-800 to-teal-900"}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <motion.div whileHover={{ scale: 1.05 }} className="relative w-10 h-10">
                <Image
                  src={scrolled ? "/VitalisLogo/darkSquare.png" : "/VitalisLogo/lightSquare.png"}
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className={`ml-3 text-xl font-semibold transition-all ${scrolled ? "text-teal-900" : "text-white"}`}>
                Vitalis Capital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-12">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <Link href={link.href} className={`text-lg heading-font tracking-wide transition-all ${scrolled ? "text-gray-700 hover:text-teal-700" : "text-white hover:text-teal-300"}`}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${scrolled ? "text-teal-900" : "text-white"}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            {isNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            {/* Overlay to close menu when clicked outside */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed right-0 top-0 h-full w-4/5 max-w-[300px] bg-teal-800 text-white z-50 shadow-lg lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="p-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" passHref>
                  <div className="flex items-center cursor-pointer">
                    <div className="relative w-8 h-8">
                      <Image
                        src={scrolled ? "/VitalisLogo/darkSquare.png" : "/VitalisLogo/lightSquare.png"}
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="ml-3 text-lg font-semibold">Vitalis Capital</span>
                  </div>
                </Link>

                {/* Close Button */}
                <button onClick={() => setIsNavOpen(false)} className="p-2 text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 px-6">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="block text-lg hover:text-teal-300 transition-all" onClick={() => setIsNavOpen(false)}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
