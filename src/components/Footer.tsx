'use client';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <footer className="bg-black text-gray-300 py-6 border-t border-gray-700 w-full">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="mt-4 flex justify-center gap-4">
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

          {year && (
            <p className="text-xs text-gray-200 mt-4">
              &copy; {year} Mitkumar Parmar. All rights reserved.
            </p>
          )}
        </div>
      </footer>
    </motion.div>
  );
}
