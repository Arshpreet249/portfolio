'use client'

import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[60vh] pt-24 px-6 bg-slate-900 overflow-hidden py-10"
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[140px]" />

      {/* TITLE */}
      <div className="relative z-10 flex items-center justify-center gap-6 mb-16">
        <span className="h-[2px] w-28 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        <h2 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
          Contact Me
        </h2>
        <span className="h-[2px] w-28 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </div>

      {/* CONTACT CARD */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
                     p-10 text-center transition-all duration-300
                     hover:shadow-[0_0_80px_rgba(34,211,238,0.25)]
                     hover:border-cyan-400/30"
        >
          <p className="text-slate-300 text-lg mb-8">
            Have a project in mind or just want to say hi?
            <br />
            Feel free to reach out — I’d love to connect.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:arshpreet7743@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-cyan-500/10 text-cyan-300 font-semibold
                       border border-cyan-400/30
                       hover:bg-cyan-400/20 hover:scale-105
                       transition-all duration-300
                       shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <Mail size={20} />
            arshpreet7743@gmail.com
          </a>

          {/* SOCIALS */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://github.com/Arshpreet249"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5
                         hover:border-cyan-400/50 hover:scale-110
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                         transition"
              aria-label="GitHub"
            >
              <Github className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/arsh-dazzell-9a748a390/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5
                         hover:border-cyan-400/50 hover:scale-110
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                         transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
