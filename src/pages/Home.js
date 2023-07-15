import React from 'react'

import Header from '../components/Header';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';

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
    px-6 py-5 
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
  const links = `
		group/link 
		text-slate-400
		hover:text-sky-300 
		focus-visible:text-sky-300
	`;
  const svg = `
    mr-1
    mb-1
		inline-block 
		h-4 w-4 
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

        <section className={section}>
          <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
            <p>
              Design inspired by 
              <a className={links} href='https://brittanychiang.com/' target='_blank' rel='noreferrer'> Brittany Chiang </a>.
              Constructed using 
              <a className={links} href='https://react.dev/' target='_blank' rel='noreferrer'> ReactJS </a> and
              <a className={links} href='https://tailwindcss.com/' target='_blank' rel='noreferrer'> Tailwind CSS </a>, 
              deployed on
              <a className={links} href='https://netlify.com/' target='_blank' rel='noreferrer'> Netlify </a>, and developed in
              <a className={links} href='https://code.visualstudio.com/' target='_blank' rel='noreferrer'> Visual Studio Code</a>.

              <br/><br/>
              <span>
                <span className='inline-block'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={svg}>
                    <path fillRule="evenodd" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M12,6 C12.5128358,6 12.9355072,6.38604019 12.9932723,6.88337887 L13,7 L13,11.5857864 L14.7071068,13.2928932 C15.0976311,13.6834175 15.0976311,14.3165825 14.7071068,14.7071068 C14.3466228,15.0675907 13.7793918,15.0953203 13.3871006,14.7902954 L13.2928932,14.7071068 L11.2928932,12.7071068 C11.1366129,12.5508265 11.0374017,12.3481451 11.0086724,12.131444 L11,12 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"/>                  </svg>
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