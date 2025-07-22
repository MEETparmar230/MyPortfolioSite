'use client';

import React from 'react';
import skills from '../lib/skills';

export default function Skills() {
  return (
    <section className="my-12 md:px-4 lg:px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white p-1">Skills</h1>

        <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-md text-gray-200">
          {/* Frontend */}
          <div className="mb-9">
            <h2 className="text-xl font-semibold mb-3 text-indigo-400">Frontend</h2>
            <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
              {skills.frontEnd.map((skill, i) => (
                <li
                  key={i}
                  className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="mb-9">
            <h2 className="text-xl font-semibold mb-3 text-indigo-400">Backend</h2>
            <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
              {skills.backEnd.map((skill, i) => (
                <li
                  key={i}
                  className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-indigo-400">Tools</h2>
            <ul className="flex flex-wrap gap-3 border border-gray-400 rounded-lg py-4 px-6 min-h-24">
              {skills.tools.map((skill, i) => (
                <li
                  key={i}
                  className="bg-[#262626] border border-gray-600 px-4 py-2 rounded-full text-sm shadow-sm h-fit"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
