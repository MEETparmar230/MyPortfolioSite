'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[#1E1E1E] w-full  mx-auto p-4 md:p-6 rounded-lg">
      <div className="flex flex-col  md:flex-row gap-8 items-center md:items-start justify-center">
        {/* Profile Card */}
        <div className="bg-zinc-900 rounded-lg w-full md:max-w-xs p-4">
          <div className="flex justify-center">
            <Image
              src="/myImage.png"
              alt="Profile Image"
              width={320}
              height={400}
              className="object-cover rounded-lg border border-indigo-500"
            />
          </div>
          <div className="my-4 text-center">
            <h1 className="text-gray-300 text-2xl font-semibold">Meet Parmar</h1>
            <p className="text-indigo-500">MERN Stack Developer</p>
          </div>

          {/* Social Icons */}
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

          {/* Resume Buttons */}
          <div className="flex justify-center gap-2">
            <a
              href="/MyCV.pdf"
              download
              className="text-indigo-400 px-4 py-2 hover:text-gray-300 hover:bg-indigo-900 border border-indigo-500 rounded-lg mx-2 inline-block"
            >
              Download Resume
            </a>
            <a
              href="/MyCV.pdf"
              className="text-indigo-400 px-4 py-2 hover:text-gray-300 hover:bg-indigo-900 border border-indigo-500 rounded-lg mx-2 inline-block"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full">
          <div className="my-6">
            <h1 className="text-3xl font-bold mb-3 text-white">
              Hi, I&apos;m <span className="text-indigo-600">Mitkumar Parmar</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              I&apos;m a Full-Stack Web Developer with experience in building and deploying responsive full-stack web apps using{' '}
              <span className="font-medium text-indigo-500">React, Node.js, MongoDB, and Next.js</span>.
              Proven ability to create scalable, user-focused solutions like Tripbnb (Airbnb clone) and a Finance Tracker with data visualizations.
              Seeking internship opportunities to contribute to real-world projects and grow in a fast-paced development environment.
            </p>
            <p className="text-gray-400">
              I like turning ideas into real-world, fast-performing web solutions. Let&apos;s build something awesome!
            </p>
          </div>

          {/* Personal Details */}
          <ul className= " flex flex-col gap-4 text-gray-300 text-lg">
            <li className=''>
              <span className="px-2 bg-indigo-600">Age</span>: <span className="bg-slate-800 px-2">21</span>
            </li>
            <li>
              <span className="px-2 bg-indigo-600">Residential</span>: <span className="bg-slate-800 px-2">Indian</span>
            </li>
            <li>
              <span className="px-2 bg-indigo-600">Freelance</span>: <span className="bg-slate-800 px-2">Available</span>
            </li>
            <li>
              <span className="px-2 bg-indigo-600">Address</span>: <span className="bg-slate-800 px-2">Kadi, Mehsana, Gujarat</span>
            </li>
            <li>
              <span className="px-2 bg-indigo-600">Phone</span>: <span className="bg-slate-800 px-2">9662487198</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
