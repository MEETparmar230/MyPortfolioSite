
'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  const iconRef = useRef<HTMLDivElement>(null);

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
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
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
      <div className="container mx-auto flex flex-wrap pt-5 md:mt-2 items-center ">
        

        {/* Desktop Nav Links */}
        <div className="md:ml-auto hidden md:flex items-center text-base space-x-5">

          
         {navLinks.map((link: NavLink) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:text-indigo-500 text-lg ${path === link.href ? 'text-indigo-500' : ''}`}
              >
                {link.label}
              </Link>
            )
         })}
        
        </div>


        {/* Mobile Menu */}
         <div className="md:hidden block ms-auto px-5 relative">
  {/* Keep ref on the icon container */}
  <div
    ref={iconRef}
    className="hover:border p-1 rounded-2xl"
    onClick={handleToggle}
  >
    <FaBars className="hover:text-gray-700 dark:hover:text-white mb-5" />
  </div>

  {navToggle && (
     <motion.div
  initial={{ x: 100 }}
  animate={{ x: 0 }}
  transition={{ duration: 0.5 }}

      ref={menuRef}
      className="flex flex-col gap-3 absolute -start-26 rounded-lg py-4 px-4 mt-0 bg-zinc-800 z-50 w-40 text-white h-60 "
    >
      {navLinks.map((link: NavLink) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={handleClose}
          className={` hover:text-indigo-500 ${path === link.href ? 'text-indigo-500' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </motion.div>
  )}
</div>
      </div>
    </header>
    </motion.nav>
  );
}
