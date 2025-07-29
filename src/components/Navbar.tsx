
'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";  

type NavLink = {
  href: string;
  label: string;
}

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const path = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setNavToggle(prev => !prev);
  };


  const handleClose = () => {
    setNavToggle(false);
  };


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact Me" },
  ]

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavToggle(false);
      }
    };

    if (navToggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navToggle]);

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
    <header className="text-gray-600 body-font dark:text-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 items-center ">
        <Link
          className="flex title-font font-medium items-center text-gray-900 dark:text-white  md:mb-0 bg-gray-200 rounded-2xl h-14"
          href="/"
        >
          <Image className="w-50" src="/Signature.png" alt="Signature" height={50} width={150}/>
        </Link>

        {/* Desktop Nav Links */}
        <div className="md:ml-auto hidden md:flex items-center text-base space-x-5">

          
         {navLinks.map((link: NavLink) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:text-indigo-500 ${path === link.href ? 'text-indigo-500' : ''}`}
              >
                {link.label}
              </Link>
            )
         })}
        
        </div>


        {/* Mobile Menu */}
         <div className="md:hidden block ms-auto px-5 relative">
          <div className="hover:border p-1 rounded-2xl">
            <FaBars onClick={handleToggle} className="hover:text-gray-700 dark:hover:text-white" />
          </div>
          {navToggle && (
            <div
              ref={menuRef}
              className="flex flex-col gap-2 absolute -start-13 rounded-lg py-4 px-4 mt-6 bg-zinc-800 z-50 w-30 text-white"
            >
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className={`hover:text-indigo-500 ${path === link.href ? 'text-indigo-500' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
    </motion.nav>
  );
}
