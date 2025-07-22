'use client';

import React, { JSX } from 'react';
import projects from '../lib/projects';

export default function Projects(): JSX.Element {
  return (
    <div className='bg-[#1A1A1A] p-7 rounded-lg shadow-lg'>
    <div className=" text-gray-100  mx-auto">
      <h1 className='text-3xl md:text-4xl lg:text-4xl font-semibold'>Projects</h1>
      {projects.map((project, i) => (
        <div
          key={i}
          className="shadow-md flex flex-col md:flex-row items-start md:items-center justify-center gap-6 my-4 mx-auto border border-gray-400 rounded-xl p-6 transition hover:shadow-lg"
        >
          {/* Left Side: Video + Title */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-3 text-2xl font-bold text-indigo-400">{project.title}</h2>
            <video
              controls
              className="rounded-lg w-full border border-gray-700"
              preload="metadata"
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Side: Description, Stack, Links */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div>
              <p className="font-semibold text-gray-300">Description:</p>
              <p className="bg-[#262626] px-3 py-2 rounded-md text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-300">Tech Stack:</p>
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
              <a
                className="text-blue-400 hover:text-blue-500 underline"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
              <a
                className="text-blue-400 hover:text-blue-500 underline"
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
