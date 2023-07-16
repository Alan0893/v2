import React from 'react';
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
  ChipWrapper,
  Chip,
  LinkWrapper,
  LinkText,
  ArrowSvg
} from '../../styles/styles';

const Experience = () => {
  return (
	  <div>
      <ol>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Sept 2022 - May 2023
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://www.starbucks.com/' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg'
                        alt='Starbucks Logo'
                      />
                      Starbucks
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Barista</div>
              </h3>
              <p className={InfoP}>
                Handled multiple tasks while ensuring high-quality output. Strong communication skills and willingness
                to support colleagues. Efficient in multitasking and maintaining a friendly demeanor in a fast-paced environment.
              </p>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Communication</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Teamwork</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Adaptability</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              July 2022 - Aug 2022
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://www.partycity.com/' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://cdn.discordapp.com/attachments/880994363805696020/1127686787779809360/unnamed-removebg-preview.png'
                        alt='Party City Logo'
                      />
                      Party City
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Sales Associate</div>
              </h3>
              <p className={InfoP}>
                Assisted customers with product inquiries, provided recommendations, and ensuring needs were met.
                Proficient in operating cash registers, handling transactions accurately, and maintaining a tidy 
                store environment. Collaborative team player with excellent communication skills. 
              </p>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Customer Service</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Inventory Management</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Visual Merchandising</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              July 2019 - Aug 2019
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://www.scsny.org/home' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://www.scsny.org/app/themes/sunnyside/assets/images/logo.png'
                        alt='SunnySide Logo'
                      />
                      SunnySide Community Service
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Volunteer - Assistant Camp Counselor</div>
              </h3>
              <p className={InfoP}>
                Worked alongside instructors and counselors to deliver educational activities to adolescents of various age groups (Grades 1-8).
                Helped enforce and carry out policies regarding safety to create a safe and healthy environment to participants. Assisted in 
                escorting youths to and from program activity locations during trips and other recreational activities.
              </p>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Creativity</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Communication</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Leadership</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ol>
      <div className={Spacing}>
        <a className={LinkWrapper} href='https://alanport.netlify.app/files/resume.pdf'>
          <span>
            <span className='whitespace-nowrap'>
              <span className={LinkText}> View Resume</span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={ArrowSvg}>
                <path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd'></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Experience;