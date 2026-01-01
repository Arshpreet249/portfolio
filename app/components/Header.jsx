"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //  Active section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 flex items-center justify-center text-blue-700 font-bold">
            A
          </div>
          <span className="text-xl font-bold text-white">
            ArshPortfolio
          </span>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item,index) => (
            <motion.button
             initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
             }}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium transition-colors
                ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }
              `}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all
                  ${activeSection === item.id ? "w-full" : "w-0"}
                `}
              />
            </motion.button>
          ))}
        </nav>

        {/* SOCIAL + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/" target="_blank" className="text-gray-300 hover:text-blue-400">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="text-gray-300 hover:text-blue-400">
            <FiLinkedin />
          </a>

          <button
            onClick={() => setContactFormOpen(true)}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-300 to-gray-100 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition"
          >
            Hire Me
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-slate-900 px-6 py-5 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left font-medium
                  ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-200"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-slate-800 p-6 rounded-xl w-full max-w-md"
            >
              <div className="flex justify-between mb-4">
                <h2 className="text-white font-bold text-xl">Get In Touch</h2>
                <button onClick={() => setContactFormOpen(false)}>
                  <FiX className="text-white" />
                </button>
              </div>

              <form className="space-y-4">
                <input className="w-full p-2 rounded bg-slate-700 text-white" placeholder="Name" />
                <input className="w-full p-2 rounded bg-slate-700 text-white" placeholder="Email" />
                <textarea className="w-full p-2 rounded bg-slate-700 text-white" placeholder="Message" />
                <button className="w-full bg-blue-600 py-2 rounded text-white font-bold">
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
