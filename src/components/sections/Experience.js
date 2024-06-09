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
  RightArrowSvg
} from '../../styles/styles';

const Experience = () => {
  return (
	  <div>
      <ol>
        <li className={Spacing}>
          <div className={Container}>
            <div className={`border border-sky-900 ${DivStyles}`} />
            <header className={Subhead}>
              Nov 2022
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://bostonhacks.org/' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg'
                        alt='BostonHacks Logo'
                      />
                      BostonHacks Hackathon
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Developer</div>
              </h3>
              <p className={InfoP}>
                Co-developed a stock prediction tool for Dow Jones Companies, enhancing investment decision-making capabilities and achieving an 85% prediction accuracy rate.
                Employed the yfinance library to extract and analyze 5 years of historical stock data for 20 Dow Jones companies, enabling comprehensive data analysis. Applied 
                Plotly to craft interactive data visualizations, increasing user engagement by 20%. Analyzed historical trends and developed predictive models with an 85% accuracy 
                rate, significantly aiding in stock market decision-making processes.
              </p>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Teamwork</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Problem-Solving</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Python</div>
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
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' /> 
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Volunteer - Assistant Camp Counselor</div>
              </h3>
              <p className={InfoP}>
                Collaborated with instructors and counselors to deliver educational activities to adolescents of various age groups (Grades 1-8), positively 
                impacting the learning experience of over 100 students. Enforced and implemented safety policies to create a secure and healthy environment,
                resulting in a 30% reduction in incidents during program activities. Assisted in escorting 50+ youths to and from program activity locations
                during trips and other recreational activities, ensuring the safety and well-being of all participants.
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
        <a className={LinkWrapper} href='/resume.pdf'>
          <span>
            <span className='whitespace-nowrap'>
              <span className={LinkText}> View Resume</span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={RightArrowSvg}>
                <path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd' />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Experience;