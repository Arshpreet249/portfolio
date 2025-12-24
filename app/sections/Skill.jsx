"use client"
import React from 'react';
import Galaxy from '../components/Galaxy.jsx';
import LogoLoop from '../components/LogoLoop.jsx'
import { SkillLogo } from "../data/skillLogos";


const Skill = () => {
  return (
    <div className="relative w-full min-h-2.5 overflow-hidden">
      <Galaxy className="absolute inset-0 pointer-events-auto"
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        // saturation={0.8}
        hueShift={240} />

      <section className="w-full min-h-screen py-20 px-6 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-bold mb-10 z-10">My Skills</h2>
    <p className="text-lg text-white z-10 max-w-2xl text-center mb-12">
           I focus on writing clean, maintainable code and crafting user experiences
  that feel smooth, responsive, and engaging.
        </p>
        <LogoLoop
          logos={SkillLogo}
          speed={120}
          gap={48}
          logoHeight={100}
          pauseOnHover
          fadeOut
          scaleOnHover

        />
      </section>
    </div>
  );
}

export default Skill;
