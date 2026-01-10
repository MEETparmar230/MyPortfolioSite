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
      <section className="my-6 md:my-10">
        <div className="mx-auto">
          <div className="bg-black shadow p-4 sm:p-6 md:p-8 rounded-lg shadow-md text-gray-200">
            {/* bg-[#1E1E1E] */}
            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
              Skills
            </h1>

            {/* Skills Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
              
              {/* Frontend */}
              <div className="w-full">
                
                
                <div className="grid grid-cols-1 border border-zinc-300 rounded-lg p-4 sm:p-5 min-h-[200px] flex  items-center">
                  <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold mb-4 text-indigo-400 text-center"
                >
                  Frontend
                </motion.h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 w-full">
                    {skills.frontEnd.map((skill, i) => (
                      <motion.li
                        key={i}
                        className=" border border-gray-600 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className='grid grid-cols-1 justify-center items-center gap-2'>
                        <div className='bg-zinc-800 rounded-full p-4 flex flex-col items-center justify-center gap-2 text-center'>
                          <img 
                            className="w-20 object-contain rounded-lg" 
                            src={skill.icon} 
                            alt={skill.name}
                          />
                          
                        </div>
                        <div className="text-xs mx-auto sm:text-sm font-medium leading-tight">
                            {skill.name}
                          </div>
                          </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Backend */}
              <div className="w-full">
                
                
                <div className="grid grid-cols-1 border border-gray-400 rounded-lg p-4 sm:p-5 min-h-[200px] flex items-center">
                  <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold mb-4 text-indigo-400 text-center"
                >
                  Backend
                </motion.h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 w-full">
                    {skills.backEnd.map((skill, i) => (
                      <motion.li
                        key={i}
                        className=" border border-gray-600 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className='grid grid-cols-1 justify-center items-center gap-2'>
                          <div  className='bg-zinc-800 rounded-full p-4 flex flex-col items-center justify-center gap-2 text-center'>
                          <img 
                            className="w-20 object-contain rounded-lg" 
                            src={skill.icon} 
                            alt={skill.name}
                          />
                          
                        </div>
                        <div className="text-xs sm:text-sm font-medium mx-auto leading-tight">
                            {skill.name}
                          </div>
                        </div>
                        
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools */}
              <div className="w-full lg:col-span-1">
                
                
                <div className="grid grid-cols-1 border border-gray-400 rounded-lg p-4 sm:p-5 min-h-[200px] flex items-center">
                  <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold mb-4 text-indigo-400 text-center"
                >
                  Tools
                </motion.h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 w-full">
                    {skills.tools.map((skill, i) => (
                      <motion.li
                        key={i}
                        className=" border border-gray-600 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className='grid grid-cols-1 justify-center items-center gap-2'>
                          <div  className='bg-zinc-800 rounded-full p-4 flex flex-col items-center justify-center gap-2 text-center'>
                          <img 
                            className="w-20 object-contain rounded-lg" 
                            src={skill.icon} 
                            alt={skill.name}
                          />
                          
                        </div>
                        <div className="text-xs sm:text-sm font-medium leading-tight mx-auto">
                            {skill.name}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}