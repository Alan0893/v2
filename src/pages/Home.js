import React from 'react'

import Header from '../components/Header';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';

const Home = () => {
  // Setting the styling of the components
  const container = `
    pt-10
    lg:w-1/2 
  `;
  const section = `
    mb-16 
    md:mb-24 
    lg:mb-20
  `;
  const h2Wrapper = `
    sticky 
    top-0 
    z-20 
    -mx-6 
    mb-4 
    px-6 
    py-5 
    backdrop-blur 
    md:-mx-12 
    md:px-12 
  `;
  const h2 = `
    text-sm 
    font-bold 
    uppercase 
    text-slate-200 
  `;

  return (
    <>
      <Header />
      <main id='content' className={container}>

        <section id='about' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>About</h2>
          </div>
          <About />
        </section>

        <section id='experience' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>Experience</h2>
          </div>
          <Experience />
        </section>

        <section id='projects' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>Projects</h2>
          </div>
          <Projects />
        </section>
        
        <section id='skills' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>Skills</h2>
          </div>
          <Skills />
        </section>

        <section id='certifications' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>Certifications</h2>
          </div>
          <Certifications />
        </section>
      </main>
    </>
  )
}

export default Home