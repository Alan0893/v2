import React from 'react'
import {
    Spacing,
    Container,
    DivStyles,
    Subhead,
    Info,
    SectionH3,
    H3Container,
    H3Span,
    LinkSvg,
    InfoP,
    Links2,

} from '../../styles/styles';

const About = () => {
  return (
	  <div>
      <p className={Spacing}>
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

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Sept 2022 - May 2026
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://www.bu.edu/' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Boston_University_seal.svg'
                        alt='Boston University Logo'
                      />
                      Boston University
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Bachelor of Arts - BA, Computer Science</div>
              </h3>
              <p className={InfoP}>
                <b>Relevant Courses: </b> 
              </p>
              <ul className='list-disc ml-4'>
                <li>
                  <a className={Links2} href='https://www.bu.edu/academics/cas/courses/cas-cs-210/' target='_blank' rel='noreferrer'>CS 210 (Computer Systems & Architecture)</a>
                </li>
                <li>
                  <a className={Links2} href='https://www.bu.edu/academics/cas/courses/cas-cs-132/' target='_blank' rel='noreferrer'>CS 132 (Geometric Algorithms / Linear Algebra)</a>
                </li>
                <li>
                  <a className={Links2} href='https://www.bu.edu/academics/cas/courses/cas-cs-131/' target='_blank' rel='noreferrer'>CS 131 (Combinatoric Structures / Discrete Mathematics)</a>
                </li>
                <li>
                  <a className={Links2} href='https://www.bu.edu/academics/cas/courses/cas-cs-112/' target='_blank' rel='noreferrer'>CS 112 (Data Structures & Algorithms)</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Sept 2018 - June 2022
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://www.foresthillshs.org/' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://upload.wikimedia.org/wikipedia/en/3/34/FHHS_Original_Seal.png'
                        alt='FHHS Logo'
                      />
                      Forest Hills High School
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'/>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>High School Diploma, Carl Sagan Honors Program (STEM)</div>
              </h3>
              <p className={InfoP}>
                <b>Grade: </b> 102.95 <br />
                <b>Activities: </b> Cross Country Team, Indoor Track & Field Team <br />
                <b>Diploma: </b> Regents Advanced Designation with Honor, Regents Designation with Mastery in Science, Regents Advanced Designation with Mastery in Math <br />
                <b>Awards:</b> 
              </p>
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
            </div>
          </div>
        </li>

      </ol>
    </div>
  )
}

export default About;