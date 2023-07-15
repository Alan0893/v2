import React from 'react'

import Projects23 from '../components/projects/2023';
import Projects22 from '../components/projects/2022';
import Projects21 from '../components/projects/2021';

const Projects = () => {
  // Setting the styling of the components
  const container = `
    pt-10
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

  return (
    <>
      <main id='content' className={container}>

        <section id='2023' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>2023</h2>
          </div>
          <Projects23 />
        </section>

        <section id='2022' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>2022</h2>
          </div>
          <Projects22 />
        </section>

        <section id='2021' className={section}>
          <div className={h2Wrapper}>
            <h2 className={h2}>2021</h2>
          </div>
          <Projects21 />
        </section>

      </main>
    </>
  )
}

export default Projects;