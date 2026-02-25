"use client";

import React from "react";
import { SkillLogo } from "../data/skillLogos";

const Skillbg = "/images/skillbg.jpg";

const Skill = () => {
  return (
    <section id="skills"
     className="relative w-full min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src={Skillbg}
        alt="Skills Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen py-20 px-6 flex flex-col items-center text-white">

        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-10 w-full">
          <span className="h-[2px] w-28 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />

          <h2 className="text-5xl font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            My Skills
          </h2>

          <span className="h-[2px] w-28 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </div>

        {/* Description */}
        <p className="text-lg max-w-2xl text-center mb-16 text-gray-300">
          I focus on writing clean, maintainable code and crafting user
          experiences that feel smooth, responsive, and engaging.
        </p>

        {/* 3D Skill Cards with Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {SkillLogo.map((skill, index) => (
            <div key={index} className="group perspective animate-float">
              <div
                className={`relative h-44 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.4)]
                           transform-style-preserve-3d transition-all duration-500 group-hover:rotate-x-12 group-hover:-rotate-y-12 group-hover:scale-105`}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                              bg-gradient-to-br ${skill.color} blur-lg`}
                />

                {/* Card Content */}
                <div className="relative z-10 h-full rounded-2xl bg-black/40 flex flex-col items-center justify-center gap-4">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="text-lg font-semibold tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;
