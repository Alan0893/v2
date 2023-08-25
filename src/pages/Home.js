import React,  { useRef, useEffect, useState } from 'react';
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

import ScrollIndicator from '../components/ScrollIndicator';

const Home = () => {
  const location = useLocation();

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certRef = useRef(null);

  // State variable to store scroll percentages for each section
  const [scrollPercentages, setScrollPercentages] = useState({
    about: 0,
    experience: 0,
    projects: 0,
    skills: 0,
    cert: 0,
  }); 

  useEffect(() => {
    // If the hash is present and set to 'projects', scroll to the 'projects' section
    if (window.location.hash === '#projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Calculate scroll percentage for each section based on its height
      const aboutScrollPercentage = ((scrollTop - aboutRef.current.offsetTop) / (aboutRef.current.offsetHeight)) * 100;
      const experienceScrollPercentage = ((scrollTop - experienceRef.current.offsetTop) / (experienceRef.current.offsetHeight)) * 100;
      const projectsScrollPercentage = ((scrollTop - projectsRef.current.offsetTop) / (projectsRef.current.offsetHeight)) * 100;
      const skillsScrollPercentage = ((scrollTop - skillsRef.current.offsetTop) / (skillsRef.current.offsetHeight)) * 100;
      const certScrollPercentage = ((scrollTop - certRef.current.offsetTop) / (certRef.current.offsetHeight)) * 100;

      // Update scroll percentages in state
      setScrollPercentages({
        about: aboutScrollPercentage,
        experience: experienceScrollPercentage,
        projects: projectsScrollPercentage,
        skills: skillsScrollPercentage,
        cert: certScrollPercentage,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main id='content' className={Container}>

        <section id='about' className={Section} ref={aboutRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>About</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.about.toFixed(2)} />
          </div>
          <About />
        </section>

        <section id='experience' className={Section} ref={experienceRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Experience</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.experience.toFixed(2)} />
          </div>
          <Experience />
        </section>

        <section id='projects' className={Section} ref={projectsRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Projects</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.projects.toFixed(2)} />
          </div>
          <Projects />
        </section>
        
        <section id='skills' className={Section} ref={skillsRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Skills</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.skills.toFixed(2)} />
          </div>
          <Skills />
        </section>

        <section id='certifications' className={Section} ref={certRef}>
          <div className={SectionHeading}>
            <h2 className={SectionH2}>Certifications</h2>
            <ScrollIndicator scrollPercentages={scrollPercentages.cert.toFixed(2)} />
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