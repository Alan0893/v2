import React,  { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {
  Home as Container,
  Section,
  SectionHeading,
  SectionH2,
  Links,
  Svg,
  Footer
} from '../styles/styles';

import Header from '../components/Header';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';

const Home = () => {
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // If the hash is present and set to 'projects', scroll to the 'projects' section
    if (window.location.hash === '#projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header />
      <main id='content' className={Container}>

        <section id='about' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>About</h2>
          </div>
          <About />
        </section>

        <section id='experience' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Experience</h2>
          </div>
          <Experience />
        </section>

        <section id='projects' className={Section} ref={projectsRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Projects</h2>
          </div>
          <Projects />
        </section>
        
        <section id='skills' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Skills</h2>
          </div>
          <Skills />
        </section>

        <section id='certifications' className={Section}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Certifications</h2>
          </div>
          <Certifications />
        </section>

        <section className={Section}>
          <footer className={Footer}>
            <p>
              Design inspired by 
              <a className={Links} href='https://brittanychiang.com/' target='_blank' rel='noreferrer'> Brittany Chiang </a>.
              Constructed using 
              <a className={Links} href='https://react.dev/' target='_blank' rel='noreferrer'> ReactJS </a> and
              <a className={Links} href='https://tailwindcss.com/' target='_blank' rel='noreferrer'> Tailwind CSS </a>, 
              deployed on
              <a className={Links} href='https://netlify.com/' target='_blank' rel='noreferrer'> Netlify </a>, and developed in
              <a className={Links} href='https://code.visualstudio.com/' target='_blank' rel='noreferrer'> Visual Studio Code</a>.

              <br/><br/>
              <span>
                <span className='inline-block'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={Svg}>
                    <path fillRule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M12,6 C12.5128358,6 12.9355072,6.38604019 12.9932723,6.88337887 L13,7 L13,11.5857864 L14.7071068,13.2928932 C15.0976311,13.6834175 15.0976311,14.3165825 14.7071068,14.7071068 C14.3466228,15.0675907 13.7793918,15.0953203 13.3871006,14.7902954 L13.2928932,14.7071068 L11.2928932,12.7071068 C11.1366129,12.5508265 11.0374017,12.3481451 11.0086724,12.131444 L11,12 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"/>                  
                  </svg>
                </span>
              </span>
              2023
            </p>
          </footer>
        </section>
      </main>
    </>
  )
}

export default Home;