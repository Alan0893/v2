import React from 'react'

import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
          <section id='about' class='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
            <div class='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 class='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
            </div>
            <div>
              <p class='mb-4'>
                I am a motivated individual with a passion for software engineering 
                and a strong desire to delve into the field of machine learning. Currently, 
                I am a student at Boston University, pursuing a B.A. in Computer Science as 
                part of the class of 2026. My insatiable curiosity drives me to constantly 
                seek out new opportunities for growth within our ever-evolving world. My 
                primary areas of interest lie in machine learning, artificial intelligence, 
                and the exciting realm of innovation. As time goes on, my list of interests 
                continues to expand and evolve.
              </p>
            </div>
          </section>
      </main>
    </>
  )
}

export default Home