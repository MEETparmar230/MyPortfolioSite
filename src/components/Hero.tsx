'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Image from 'next/image';
import { motion } from "framer-motion"

export default function Hero() {


const MotionImage = motion(Image);

  return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  
    <div className="backdrop-blur-3xl w-full md:my-10 mx-auto p-4 md:p-6 rounded-lg">
      {/* bg-[#1E1E1E] */}
      <div className="flex flex-col  md:flex-row gap-8 items-center md:items-start justify-center">
        {/* Profile Card */}
        <div className="shadow backdrop-blur-3xl rounded-lg w-full md:max-w-xs p-4">
  
          <div className="flex justify-center">
            <MotionImage
          src="/myImage.png"
          alt="Profile Image"
          width={320}
          height={400}
          className="object-cover rounded-lg border border-indigo-500"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
          </div>

          <div className="my-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-gray-300 text-2xl font-semibold">Meet Parmar</h1>

              <p className="text-indigo-500">MERN Stack Developer</p>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex justify-center gap-4 text-xl mb-4">
              <a href="https://github.com/MEETparmar230" className="hover:text-indigo-400" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/mitkumar-parmar-b23b20279" className="hover:text-indigo-400" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=meetparmar2362004@gmail.com"
                className="hover:text-indigo-400"
                aria-label="Email"
              >
                <MdOutlineMail />
              </a>
            </div>
          </motion.div>

          {/* Resume Buttons */}
          
            <div className="flex justify-center gap-2">
              <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
              <a
                href="/projects"
                className="text-indigo-400 px-4 py-2 hover:text-gray-300 hover:bg-indigo-900 border border-indigo-500 rounded-lg mx-2 inline-block"
              >
                View My Work
              </a>
              </motion.button>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
              <a
                href="/MyCV.pdf"
                className="text-indigo-400 px-4 py-2 hover:text-gray-300 hover:bg-indigo-900 border border-indigo-500 rounded-lg mx-2 inline-block"
              >
                View Resume
              </a>
              </motion.button>
              </motion.div>
              
            </div>
          
        </div>

        {/* About Section */}
        <div className="w-full">
          <div className="my-6">
            <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
className="text-3xl font-bold mb-3 text-white">
              Hi, I&apos;m <span className="text-indigo-600">Mitkumar Parmar</span>
           </motion.h1>
           <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
       className="text-lg text-gray-300 mb-4">
              I&apos;m a Full-Stack Web Developer skilled in building and deploying responsive, scalable applications using{' '}
              <span className="font-medium text-indigo-500">MERN Stack, Next.js, Java and Spring-Boot</span>.
              I’ve developed real-world projects like a Resume Analyzer, GramBazaar (e-commerce platform with Stripe payments & admin dashboard), Tripbnb (Airbnb-style booking platform), and a Finance Tracker with rich data visualizations.
           </motion.p>
           <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
         className="text-gray-400">
              I focus on clean UI/UX, performance optimization, and writing maintainable code. I’m currently seeking internship opportunities where I can contribute to impactful products and grow in a collaborative, fast-paced environment.
          </motion.p>
          </div>

          {/* Personal Details */}
          <ul className=" flex flex-col gap-4 text-gray-300 text-lg">
            <motion.li
                             
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
              <span className="px-2 bg-indigo-600">Age</span>: <span className="bg-slate-800 px-2">21</span>
           </motion.li>
            
            <motion.li
                             
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
              <span className="px-2 bg-indigo-600">Residential</span>: <span className="bg-slate-800 px-2">Indian</span>
            </motion.li>
            <motion.li
                             
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
              <span className="px-2 bg-indigo-600">Freelance</span>: <span className="bg-slate-800 px-2">Available</span>
            </motion.li>
            <motion.li
                             
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
              <span className="px-2 bg-indigo-600">Address</span>: <span className="bg-slate-800 px-2">Kadi, Mehsana, Gujarat</span>
           </motion.li>
            <motion.li
                             
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
              <span className="px-2 bg-indigo-600">Phone</span>: <span className="bg-slate-800 px-2">9662487198</span>
          </motion.li>
          </ul>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
