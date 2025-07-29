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

            {/* Frontend */}
            <div className="mb-9">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-3 text-indigo-400">Frontend
              </motion.h2>
              <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
                {skills.frontEnd.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}

                    className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                  >
                    {skill}
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
              <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
                {skills.backEnd.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
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
              <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
                {skills.tools.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>

                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
