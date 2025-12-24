"use client"
import React from "react";
import { motion } from "framer-motion";
const About= "/images/about.jpg";

// import "../assets/css/card.css";


import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function AboutPage() {
  return (
    <section className="about-section w-full min-h-screen py-20 px-6 bg-black">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-white text-center mb-12">
        About Me
      </h2>

      <div className="relative max-w-6xl mx-auto w-full">

        {/* Background Blur Image */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)" }}
          animate={{ opacity: 1, filter: "blur(5px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: `url(${About})`,
          }}
        />

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">

          {/* TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 glass-card px-4 py-4"
          >
            <p className="text-lg leading-relaxed text-slate-800">
              Hi — I’m Arshpreet, a frontend developer who builds beautiful,
              accessible, and performant web experiences. I work primarily with
              React, Tailwind CSS, and Three.js to create interactive UI and 3D
              web scenes. I love turning design into delightful, pixel-perfect
              products.
            </p>
          </motion.div>

          {/* 🦋 STATIC BUTTERFLY WITH SPACE (RIGHT SIDE CENTERED) */}
          <div className="flex items-center justify-center w-full h-full z-20 pointer-events-none">
            <div style={{ width: "260px", height: "260px" }}>
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
