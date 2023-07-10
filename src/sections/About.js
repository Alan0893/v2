import React from 'react'

const About = () => {
  // Setting the styling of the components
  const p = `
    mb-10
  `;
  const edu = `
    mb-10
  `;
  const container = `
    group 
    relative
    grid 
    pb-1 
    transition-all 
    sm:grid-cols-8 
    sm:gap-8 
    md:gap-4 
  `;
  const divStyle = `
    absolute 
    -inset-x-4 
    -inset-y-4 
    z-0 hidden 
    rounded-md 
    lg:-inset-x-6 lg:block 
    lg:group-hover:bg-slate-800/50 
  `;
  const time = `
    z-10 
    mb-2 
    mt-1 
    sm:ml-3 
    text-xs 
    font-semibold 
    uppercase 
    text-slate-500 
    sm:col-span-2
  `;
  const info = `
    z-10 
    sm:col-span-6
  `;
  const h3 = `
    font-medium 
    leading-snug 
    text-slate-200
  `;
  const h3Container = `
    group/link 
    inline-flex 
    font-medium 
    text-slate-200 
    hover:text-blue-400 
    focus-visible:text-blue-400
  `;
  const h3Span = `
    absolute 
    -inset-x-4 
    -inset-y-2.5 
    hidden 
    md:-inset-x-6 
    md:-inset-y-4 
    lg:block
  `;
  const linkSvg = `
    ml-1 
    inline-block 
    h-4 
    w-4 
    shrink-0 
    translate-y-px 
    transition-transform 
    group-hover/link:-translate-y-1 
    group-hover/link:translate-x-1 
    group-focus-visible/link:-translate-y-1 
    group-focus-visible/link:translate-x-1 
    motion-reduce:transition-none
  `;
  const infoP = `
    mt-2 
    text-sm 
    leading-normal
  `;
  const links = `
    group/link 
    inline-flex 
    hover:text-sky-300 
    focus-visible:text-sky-300
  `;

  return (
	  <div>
      <p className={p}>
        I am a motivated individual with a passion for software engineering 
        and a strong desire to delve into the field of machine learning. Currently, 
        I am a student at Boston University, pursuing a B.A. in Computer Science as 
        part of the class of 2026. My insatiable curiosity drives me to constantly 
        seek out new opportunities for growth within our ever-evolving world. My 
        primary areas of interest lie in machine learning, artificial intelligence, 
        and the exciting realm of innovation. As time goes on, my list of interests 
        continues to expand and evolve.
      </p>

      <ol>

        <li className={edu}>
          <div className={container}>
            <div className={divStyle} />
            <header className={time}>
              Sept 2022 - May 2026
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://www.bu.edu/' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className="mr-2 h-6 w-6 inline"
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Boston_University_seal.svg"
                        alt="Boston University Logo"
                      />
                      Boston University
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Bachelor of Arts - BA, Computer Science</div>
              </h3>
              <p className={infoP}>
                <b>Relevant Courses: </b> 
                <ul className='list-disc ml-4'>
                  <li>
                    <a className={links} href='https://www.bu.edu/academics/cas/courses/cas-cs-210/' target='_blank' rel='noreferrer'>CS 210 (Computer Systems & Architecture)</a>
                  </li>
                  <li>
                    <a className={links} href='https://www.bu.edu/academics/cas/courses/cas-cs-132/' target='_blank' rel='noreferrer'>CS 132 (Geometric Algorithms / Linear Algebra)</a>
                  </li>
                  <li>
                    <a className={links} href='https://www.bu.edu/academics/cas/courses/cas-cs-131/' target='_blank' rel='noreferrer'>CS 131 (Combinatoric Structures / Discrete Mathematics)</a>
                  </li>
                  <li>
                    <a className={links} href='https://www.bu.edu/academics/cas/courses/cas-cs-112/' target='_blank' rel='noreferrer'>CS 112 (Data Structures & Algorithms)</a>
                  </li>
                </ul>
              </p>

            </div>
          </div>
        </li>

        <li className={edu}>
          <div className={container}>
            <div className={divStyle} />
            <header className={time}>
              Sept 2018 - June 2022
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://www.foresthillshs.org/' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className="mr-2 h-6 w-6 inline"
                        src="https://upload.wikimedia.org/wikipedia/en/3/34/FHHS_Original_Seal.png"
                        alt="FHHS Logo"
                      />
                      Forest Hills High School
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>High School Diploma, Carl Sagan Honors Program (STEM)</div>
              </h3>
              <p className={infoP}>
                <b>Grade: </b> 102.95 <br />
                <b>Activities: </b> Cross Country Team, Indoor Track & Field Team <br />
                <b>Diploma: </b> Regents Advanced Designation with Honor, Regents Designation with Mastery in Science, Regents Advanced Designation with Mastery in Math <br />
                <b>Awards:</b> 
                <ul className='list-disc ml-4'>
                  <li>
                    President's Education Award for Excellence Gold Seal
                  </li>
                  <li>
                    Outstanding Academic Excellence (GPA 100+)
                  </li>
                  <li>
                    United States Marine Scholastic Excellence Award
                  </li>
                  <li>
                    Forest Hills High School Scholar Athlete
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </li>

      </ol>
    </div>
  )
}

export default About