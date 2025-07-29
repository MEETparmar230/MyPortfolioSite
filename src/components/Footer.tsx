'use client'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
  initial={{ y: 100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
  >
    <footer className="bg-[#1E1E1E] text-gray-300 py-6 border-t border-gray-700 mt-10 absolute w-full">
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

        <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Mitkumar Parmar. All rights reserved.</p>
      </div>
    </footer>
    </motion.div>
  );
}
