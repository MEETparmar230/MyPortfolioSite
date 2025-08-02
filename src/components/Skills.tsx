'use client';

import React from 'react';
import skills from '../lib/skills';
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="">
        <div className="mx-auto">

          <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-md text-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white p-1">Skills</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Frontend */}
            <div className="mb-9 ">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-3 text-indigo-400">Frontend
              </motion.h2>
              <ul className="flex flex-wrap gap-4 border justify-center border-gray-400 rounded-lg p-6 min-h-24">
                {skills.frontEnd.map((skill, i) => (
                  <motion.li
  key={i}
  className="relative group bg-zinc-700 border border-gray-600 p-4 rounded-lg shadow-sm h-fit flex items-center justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.05, duration: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
   <div className='gird grid-cols-1 w-20 h-20 gap-1 items-center justify-center flex flex-col'>
     <img className="h-10 w-10 object-contain" src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
  </div>
</motion.li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="mb-9">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-3 text-indigo-400">Backend
              </motion.h2>
              <ul className="flex flex-wrap gap-3 border border-gray-400 justify-center rounded-lg p-6 min-h-24">
                {skills.backEnd.map((skill, i) => (
                  <motion.li
  key={i}
  className="relative group bg-zinc-700 border border-gray-600 p-4 rounded-lg shadow-sm h-fit flex items-center justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.05, duration: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
   <div className='gird grid-cols-1 w-20 h-20 gap-1 items-center justify-center flex flex-col'>
     <img className="h-10 w-10 object-contain" src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
  </div>
</motion.li>

                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-3 text-indigo-400">Tools

              </motion.h2>
              <ul className="flex flex-wrap gap-3 border border-gray-400 justify-center rounded-lg p-6 min-h-24 ">
                {skills.tools.map((skill, i) => (
                 <motion.li
  key={i}
  className="relative group bg-zinc-700 border border-gray-600 p-4 rounded-lg shadow-sm h-fit flex items-center justify-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.05, duration: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <div className=' w-20 h-20 gap-1 items-center justify-center flex flex-col'>
     <img className="h-10 w-10 object-contain" src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
  </div>
 

  
 
</motion.li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
