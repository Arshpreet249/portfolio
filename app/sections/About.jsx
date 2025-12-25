

"use client";

import React from "react";
import { motion } from "framer-motion";
const Gif = "/video/space.gif"; 
const Profile = "/images/profile.jpg";
const Chatbox = '/video/chatbox.gif'

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen pt-24 px-6 bg-slate-900 overflow-hidden">
      {/* TITLE */}
     <div className="flex items-center justify-center gap-6 mb-12 w-full">
          <span className="h-[2px] w-28 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          
          <h2 className="text-5xl text-white font-extrabold md:text-4xl font-semibold tracking-wide
                         drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            About Me
          </h2>
          
          <span className="h-[2px] w-28 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* STYLED TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-10 rounded-3xl
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_30px_80px_rgba(0,0,0,0.55)]
            overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none
              bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-600/30
              blur-2xl opacity-60"
            />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Frontend Developer
              </h3>
              <p className="text-lg leading-relaxed text-white/85">
                Hi — I’m <span className="text-white font-semibold">Arshpreet</span>, a
                frontend developer passionate about crafting beautiful,
                accessible, and high-performance web experiences. I work with
                React, Tailwind CSS, Framer Motion, and Three.js to build
                interactive, modern interfaces and immersive 3D visuals.
              </p>
              <div className="w-16 h-1 rounded-full
                bg-gradient-to-r from-orange-400 to-pink-500"
              />
            </div>
          </motion.div>

          {/* 3D PROFILE ORB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full
              bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600
              blur-3xl opacity-40"
            />
            <motion.div
              animate={{ rotateY: [0, 18, -18, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative w-80 h-80 rounded-full
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_0_90px_rgba(255,255,255,0.35)]
              flex items-center justify-center overflow-hidden"
            >
              <div
                className="w-64 h-64 rounded-full bg-center bg-cover
                border border-white/30
                shadow-[inset_0_0_25px_rgba(0,0,0,0.6)]"
                style={{ backgroundImage: `url(${Profile})` }}
              />
              <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 flex justify-center"
      >
        <img src={Chatbox} alt="" className="" />
      </motion.div>

    </section>
  );
}
