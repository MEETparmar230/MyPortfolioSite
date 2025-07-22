'use client';

import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

export default function Home() {
  return (
    <div className='md:w-3/4 lg:w-3/4 md:mx-auto lg:mx-auto mx-4 flex flex-col gap-5'>
      <Hero />
      <AboutMe />
    
      <div className='max-w-5xl mx-auto'>
      <Projects />
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}
