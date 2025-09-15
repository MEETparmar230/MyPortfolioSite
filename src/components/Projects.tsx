'use client';

import React from 'react';
import projects from '../lib/projects';
import { motion } from "framer-motion";


export default function Projects(){
  return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <div className='bg-[#1A1A1A] md:p-7 md:my-10 p-2 rounded-lg shadow-lg'>
    <div className=" text-gray-100  mx-auto">
      <h1 className='text-3xl md:text-4xl lg:text-4xl font-semibold'>Projects</h1>
      
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
  custom={i} // pass index of the card
  viewport={{ once: true }}
>
        <div
         
          className="shadow-md flex flex-cols flex-wrap md:flex-row items-start md:items-center justify-start gap-6 my-4 mx-auto border border-gray-400 rounded-xl p-6 transition hover:shadow-lg"
        >
          {/* Left Side: Video + Title */}
          <div className="min-w-70 max-w-140">
            <h2 className="mb-3 text-2xl font-bold text-indigo-400">{project.title}</h2>
            {project.videoSrc && project.videoSrc!==''?
            <video
              controls
              className="rounded-lg w-full border border-gray-700 md:h-80"
              preload="metadata"
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <img
            src={project.imageSrc}
            alt={project.title}
            
            className="rounded-lg w-full border border-gray-700 object-cover  md:h-76"
            />
            }
          </div>

          {/* Right Side: Description, Stack, Links */}
          <div className="flex flex-col gap-5  md:w-1/2 md:w-160 min-w-70">
            <div>
              <p className="font-semibold text-lg text-gray-300">Description:</p>
              <p className="bg-[#262626] px-3 py-2 rounded-md text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <p className="font-semibold  text-lg  text-gray-300">Tech Stack:</p>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map((stackItem, i) => (
                  <li
                    key={i}
                    className="border border-gray-500 text-gray-300 rounded-full px-3 py-1 text-sm bg-[#333333]"
                  >
                    {stackItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-5 mt-2">
              {project.liveLink!==''?<a
                className="text-indigo-400 hover:text-indigo-500 hover:border-indigo-500 underline px-2 border border-indigo-400 rounded-md"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            :
              <a
                className="text-indigo-400 hover:text-indigo-500 hover:border-indigo-500 underline  px-2 border border-indigo-400 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
               Not Live
              </a>
                 
            }
              <a
                className="text-indigo-400 hover:text-indigo-500 hover:border-indigo-500 underline  px-2 border border-indigo-400 rounded-md"
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
       
      </motion.div>))} 
    </div>
    </div>
    </motion.div>
  );
}
