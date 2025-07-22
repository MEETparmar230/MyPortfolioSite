
'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle(prev => !prev);
  };

  return (
    <header className="text-gray-600 body-font dark:text-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0 bg-gray-200 rounded-2xl h-14"
          href="/"
        >
          <Image className="w-50" src="/Signature.png" alt="Signature" height={50} width={150}/>
        </Link>

        {/* Desktop Nav Links */}
        <div className="md:ml-auto hidden md:flex items-center text-base space-x-5">
          <Link className="hover:text-indigo-500" href="/">Home</Link>
          <Link className="hover:text-indigo-500" href="/about">About Me</Link>
          <Link className="hover:text-indigo-500" href="/projects">Projects</Link>
          <Link className="hover:text-indigo-500" href="/skills">Skills</Link>
          <Link className="hover:text-indigo-500" href="/contact">Contact Me</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden block ms-auto px-5 relative">
          <div className="hover:border p-1 rounded-2xl">
            <FaBars onClick={handleToggle} className="hover:text-gray-700 dark:hover:text-white" />
          </div>
          {navToggle && (
            <div className="flex flex-col gap-2 absolute -start-10 rounded-lg py-4 mt-4 bg-gray-500 z-50 w-auto text-white">
              <Link className="hover:text-indigo-500" href="/">Home</Link>
              <Link className="hover:text-indigo-500" href="/about">About Me</Link>
              <Link className="hover:text-indigo-500" href="/projects">Projects</Link>
              <Link className="hover:text-indigo-500" href="/skills">Skills</Link>
              <Link className="hover:text-indigo-500" href="/resume">Resume</Link>
              <Link className="hover:text-indigo-500" href="/contact">Contact Me</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
