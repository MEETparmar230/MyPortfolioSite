'use client';

import React from 'react';
import projects from '../lib/projects';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className=' rounded-lg border-zinc-400 backdrop-blur-3xl p-3 sm:p-5 md:p-7 my-6 md:my-10 rounded-lg shadow-lg'>
        {/* bg-[#1A1A1A] */}
        <div className="text-gray-100 mx-auto">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-6'>
            Projects
          </h1>
          
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.2 },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <div className=" shadow-lg border border-zinc-500 my-6 mx-auto  rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300">
                
                {/* Project Title - Always at top */}
                <h2 className="mb-4 text-lg sm:text-xl md:text-2xl font-bold text-indigo-400">
                  {project.title}
                </h2>
                
                {/* Content Container */}
                <div className='flex flex-col lg:flex-row gap-5 lg:gap-6'>
                  
                  {/* Left Side: Media */}
                  <div className="w-full lg:w-2/5 lg:flex-shrink-0 ">
                    {project.videoSrc && project.videoSrc !== '' ? (
                      <video
                        controls
                        className="rounded-lg w-full border border-gray-700 aspect-video object-contain"
                        preload="metadata"
                      >
                        <source src={project.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="rounded-lg w-full border border-gray-700 object-contain aspect-video"
                      />
                    )}
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-col gap-4 sm:gap-5 w-full lg:flex-1">
                    
                    {/* Description */}
                    <div>
                      <p className="font-semibold text-base sm:text-lg text-gray-200 mb-2">
                        Description:
                      </p>
                      <p className="bg-zinc-900 [#262626] px-3 py-3 rounded-md text-zinc-200 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="font-semibold text-base sm:text-lg text-gray-200 mb-2">
                        Tech Stack:
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.techStack.map((stackItem, i) => (
                          <li
                            key={i}
                            className="border border-gray-500 text-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-900 [#333333] transition-colors hover:bg-[#404040] hover:border-gray-400"
                          >
                            {stackItem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row xs:flex-row gap-3 mt-2">
                      {project.liveLink !== '' ? (
                        <a
                          className="text-indigo-400 hover:text-indigo-300 hover:border-indigo-300 underline px-3 py-2 border border-indigo-400 rounded-md text-center text-sm sm:text-base transition-all duration-200 hover:shadow-md flex-1 xs:flex-none"
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                        </a>
                      ) : (
                        <span className="text-gray-500 border border-gray-600 px-3 py-2 rounded-md text-center text-sm sm:text-base cursor-not-allowed flex-1 xs:flex-none">
                          Not Live
                        </span>
                      )}
                      
                      <a
                        className="text-indigo-400 hover:text-indigo-300 hover:border-indigo-300 underline px-3 py-2 border border-indigo-400 rounded-md text-center text-sm sm:text-base transition-all duration-200 hover:shadow-md flex-1 xs:flex-none"
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}