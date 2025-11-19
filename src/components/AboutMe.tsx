'use client';

import React, { JSX } from 'react';
import { motion } from 'framer-motion';

export default function About(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="md:my-10">
        <div className="mx-auto">
          <div className="bg-[#1E1E1E] text-gray-200 md:py-10 md:my-6 py-4 px-6 rounded-lg shadow-lg">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              viewport={{ once: true }}
            >
              About Me
            </motion.h1>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                Hi! I&apos;m <span className="text-indigo-400 font-semibold">Mitkumar Parmar</span>, a passionate full-stack web developer focused on building clean,
                responsive, and user-centric web applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                💻 I specialize in the <span className="text-indigo-400">MERN stack</span> (MongoDB, Express.js, React, Node.js), and also work with <span className="text-indigo-400">Next.js, Java, and Spring Boot</span> to build reliable backend services and full-stack solutions like:
              </motion.p>

              <ul className="list-disc list-inside text-gray-400 space-y-3">

                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <strong className="text-indigo-400">Resume Analyzer</strong> — A web app that analyzes uploaded resumes and extracts key insights such as skills, experience, and strengths using NLP.
                </motion.li>

                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <strong className="text-indigo-400">Grambazaar</strong> — An e-commerce platform for exploring rural products with secure bookings, Stripe payments, and an admin dashboard.
                </motion.li>

                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <strong className="text-indigo-400">TripBNB</strong> — an Airbnb clone with map integration, image uploads, authentication, and reviews.
                </motion.li>

                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <strong className="text-indigo-400">Personal Finance Visualizer</strong> — a tool for tracking expenses, budgets, and insights, built using Next.js, MongoDB, Recharts, and Tailwind.
                </motion.li>
              </ul>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                🔧 I&apos;m comfortable using tools like <span className="text-indigo-400">Git, Postman, Vercel, Render</span>, and <span className="text-indigo-400">Cloudinary</span> to manage workflows and deploy full-stack apps.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                👨‍💻 What drives me is the joy of turning ideas into real-world solutions, constantly learning new technologies, and writing scalable, efficient code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                Outside of coding, I enjoy exploring design tools, improving UI/UX, and experimenting with personal projects that challenge me creatively and technically.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-semibold mt-8 mb-3 text-white"
              >
                🛠 Technologies I Work With
              </motion.h2>

              <ul className="list-disc list-inside text-gray-400 space-y-3">
                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <strong className="text-indigo-400">Frontend:</strong> React, Tailwind CSS, Redux Toolkit, GrapgQL.
                </motion.li>
                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <strong className="text-indigo-400">Backend:</strong> Spring-Boot, Express.js, MongoDB, SQL.
                </motion.li>
                <motion.li
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <strong className="text-indigo-400">Tools & Platforms:</strong> Git, Docker, Postman, Cloudinary, Vercel, Render
                </motion.li>
              </ul>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                <p>🚀 My goal is to grow as a developer, contribute to meaningful products, and continuously learn new technologies.</p>

                <p className='ms-6'>I’m currently open to <span className="text-white font-medium">internship</span> and <span className="text-white font-medium">entry-level opportunities</span> in full-stack development.</p>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                Let’s connect and build something amazing!
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
