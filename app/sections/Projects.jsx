'use client'

import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'DB Craft',
    description: `DB Craft is a modern web-based SQL query execution interface built
    with React, designed for seamless database management directly from the browser.
    Users can write, execute, and download query results effortlessly. The application
    supports multi-sheet query tabs, temporary and permanent database connections,
    and real-time console logs. It leverages Mantine React Table for fast,
    interactive, and scalable data visualization.`,
    image: '/images/dbcraft.png',
    tech: ['React js', 'Tailwind CSS', 'Mantine UI', 'Mantine React Table', 'JavaScript'],
  },
  {
    title: 'Delights',
    description: `Delights is a modern food ordering web application with a rich,
    visually appealing UI. It features restaurant browsing, dynamic menus,
    authentication screens, and a smooth checkout experience. The interface focuses
    on usability, animations, and responsiveness across devices.`,
    image: '/images/delights.png',
    tech: ['React js', 'Tailwind CSS', 'JavaScript'],
  },
]

const Projects = () => {
  return (
    <section  id='projects'
    className="w-full min-h-screen pt-24 px-6 bg-slate-900 overflow-hidden">
      
      {/* TITLE */}
      <div className="flex items-center justify-center gap-6 mb-24">
        <span className="h-[2px] w-28 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        <h2 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
          Projects
        </h2>
        <span className="h-[2px] w-28 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 mb-10">

        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >

            {/* IMAGE */}
            <div className={`flex justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="relative w-[320px] h-[210px] sm:w-[520px] sm:h-[320px] lg:w-[900px] lg:h-[380px]">
                
                {/* Frame */}
                <div className="absolute inset-0 border-4 border-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.35)]" />

                {/* Image */}
                <div className="absolute top-6 left-6 w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full border border-cyan-400 text-cyan-400 text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects
