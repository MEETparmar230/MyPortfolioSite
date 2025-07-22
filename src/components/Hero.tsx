'use client';

import React, { JSX } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

export default function Hero(): JSX.Element {
  return (
    <div className='bg-[#1E1E1E] w-3/4 mx-auto pe-5 my-10 rounded-lg'>


      <div className=' flex justify-center '>
        <div className='scale-105 bg-zinc-900  w-120'>
          <div className=' h-110 w-90 overflow-hidden' >

            <img className='fill' src="/image.jpg" alt="" />

          </div>
          <div className='my-4'>
            <h1 className=' text-gray-300 text-2xl font-semibold text-center '>Meet Parmar</h1>
            <p className='text-indigo-500 text-center' >MERN Stack Developer</p>
          </div>
          <div className="max-w-5xl mx-auto text-center px-4">


            <div className="mt-4 flex justify-center gap-4">
              {/* github */}
              <a href="https://github.com/MEETparmar230" className="hover:text-indigo-400" aria-label="Facebook">
                <FaGithub />
              </a>

              {/* linked in */}
              <a href="https://linkedin.com/in/mitkumar-parmar-b23b20279" className="hover:text-indigo-400" aria-label="Twitter">
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetparmar2362004@gmail.com" className="hover:text-indigo-400" aria-label="Instagram">
                <MdOutlineMail />
              </a>

            </div>

            
          </div>
          <div>
            <div className="p-4 text-white rounded-lg my-4">
              
              <a
                href="/MyCV.pdf"
                download
                className="text-indigo-400 p-2  hover:text-gray-300 hover:bg-indigo-900  border border-indigo-500 mx-2 rounded-lg"
              >
                Download Resume
              </a>
              <a
                href="/MyCV.pdf"
                className="text-indigo-400 p-2  hover:text-gray-300 hover:bg-indigo-900 border border-indigo-500  mx-2 rounded-lg"
              >
                View Resume
              </a>
            </div>
          </div>
          
        </div>
        <div className='h-50 w-full ps-16 '>
          

          <div className='my-10'>
          <h1 className="text-3xl font-bold mb-3">
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mitkumar Parmar</span>
      </h1>

      <p className="text-lg mb-4">
        I'm a Full-Stack Web Developer with experience in building and deploying responsive full-stack web apps using <span className="font-medium text-indigo-500 dark:text-indigo-400">React, Node.js, MongoDB, and Next.js</span> . Proven ability to create scalable, user-focused solutions like Tripbnb (Airbnb clone) and a Finance Tracker with data visualizations. Seeking internship opportunities to contribute to real-world projects and grow in a fast-paced development environment.
      </p>

      <p className="mb-6 text-gray-600 dark:text-gray-400">
        I like turning ideas into real-world, fast-performing web solutions. Let's build something awesome!
      </p>
          </div>
          <div className='my-14'>
            <ul className='flex flex-col gap-2 text-gray-300 text-lg'>
              <li><span className='px-2 bg-indigo-600'>age</span> : <span className='bg-slate-800  px-2'>21</span></li>
              <li><span className='px-2 bg-indigo-600'>residencial</span> : <span className='bg-slate-800 px-2'>Indian</span></li>
              <li><span className='px-2 bg-indigo-600'>freelance</span> : <span className='bg-slate-800 px-2'>Available</span></li>
              <li><span className='px-2 bg-indigo-600'>address</span> : <span className='bg-slate-800  px-2'>kadi,mehsana,gujrat</span></li>
              <li><span className='px-2 bg-indigo-600'>phone</span> : <span className='bg-slate-800  px-2'>9662487198</span></li>
            </ul>
          </div>

        </div>
      </div>


    </div>
  );
}
