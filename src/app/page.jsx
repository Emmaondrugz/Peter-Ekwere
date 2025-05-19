'use client';

import Head from 'next/head';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Play:wght@400;700&family=Playwrite+HU:wght@100..400&display=swap" rel="stylesheet" />
      </Head>

      <main className="text-black">
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Testimonials />
        <Connect />
        <Footer />
      </main>
    </>
  );
}

