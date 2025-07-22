'use client';

import React, { JSX } from 'react';


export default function About(): JSX.Element {
  return (
    <section className="my-10 md:px-4 lg:px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h1>

        <div className="bg-[#1E1E1E] text-gray-200 py-10 px-6 rounded-lg shadow-lg">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Hi! I&apos;m <span className="text-indigo-400 font-semibold">Mitkumar Parmar</span>, a passionate full-stack web developer focused on building clean,
              responsive, and user-centric web applications.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              💻 I specialize in the <span className="text-indigo-400">MERN stack</span> (MongoDB, Express.js, React, Node.js), and have built real-world projects like:
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>
                <strong className="text-indigo-400">TripBNB</strong> an Airbnb clone with map integration, image uploads, authentication, and reviews.
              </li>
              <li>
                <strong className="text-indigo-400">Personal Finance Visualizer</strong>  a tool for tracking expenses, budgets, and insights, built using
                Next.js, MongoDB, Recharts, and Tailwind.
              </li>
            </ul>

            <p className="text-lg leading-relaxed text-gray-300">
              🔧 I&apos;m comfortable using tools like <span className="text-indigo-400">Git, Postman, Vercel, Render,</span> and <span className="text-indigo-400">Cloudinary</span> to manage
              workflows and deploy full-stack apps.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              👨‍💻 What drives me is the joy of turning ideas into real-world solutions, constantly learning new technologies, and writing scalable, efficient code.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Outside of coding, I enjoy exploring design tools, improving UI/UX, and experimenting with personal projects that challenge me creatively and technically.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">🛠 Technologies I Work With</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  <strong className="text-indigo-400">Frontend:</strong> React, Next.js, Tailwind CSS, HTML5, JavaScript
                </li>
                <li>
                  <strong className="text-indigo-400">Backend:</strong> Node.js, Express.js, MongoDB
                </li>
                <li>
                  <strong className="text-indigo-400">Tools & Platforms:</strong> Git, GitHub, Postman, Cloudinary, Vercel, Render
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-300">
              🚀 I'm currently open to <span className="text-white font-medium">internship</span> and <span className="text-white font-medium">job opportunities</span> where I can contribute,
              grow, and help build impactful web applications.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Let&apos;s connect and create something awesome together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
