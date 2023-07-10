import React from 'react'

const Experience = () => {
  // Setting the styling of the components
  const experience = `
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
  const skills = `
    mt-2
    flex
    flex-wrap
  `;
  const chip = `
    flex 
    items-center 
    rounded-full 
    bg-sky-400/10 
    px-3 py-1 
    text-xs 
    font-medium 
    leading-5
    text-sky-300
  `;
  const linkWrapper = `
    group 
    inline-flex 
    items-center 
    font-medium 
    font-semibold 
    leading-tight 
    text-slate-200
  `;
  const linkText = `
    border-b 
    border-transparent 
    group-hover:border-sky-400 
  `;
  const arrowSvg = `
    ml-1 
    inline-block 
    h-4 
    w-4 
    shrink-0 
    -translate-y-px 
    transition-transform 
    group-hover:translate-x-2 
    group-focus-visible:translate-x-2 
  `;

  return (
	  <div>
      <ol>

        <li className={experience}>
          <div className={container}>
            <div className={divStyle} />
            <header className={time}>
              Sept 2022 - May 2023
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://www.starbucks.com/' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className="mr-2 h-6 w-6 inline"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/188px-Starbucks_Corporation_Logo_2011.svg.png"
                        alt="Starbucks Logo"
                      />
                      Starbucks
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Barista</div>
              </h3>
              <p className={infoP}>
                Handled multiple tasks while ensuring high-quality output. Strong communication skills and willingness
                to support colleagues. Efficient in multitasking and maintaining a friendly demeanor in a fast-paced environment.
              </p>
              <ul className={skills}>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Communication</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Teamwork</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Adaptability</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Adaptability</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={experience}>
          <div className={container}>
            <div className={divStyle} />
            <header className={time}>
              July 2022 - Aug 2022
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://www.partycity.com/' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className="mr-2 h-6 w-6 inline"
                        src="https://cdn.discordapp.com/attachments/880994363805696020/1127686787779809360/unnamed-removebg-preview.png"
                        alt="Party City Logo"
                      />
                      Party City
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Sales Associate</div>
              </h3>
              <p className={infoP}>
                Assisted customers with product inquiries, provided recommendations, and ensuring needs were met.
                Proficient in operating cash registers, handling transactions accurately, and maintaining a tidy 
                store environment. Collaborative team player with excellent communication skills. 
              </p>
              <ul className={skills}>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Customer Service</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Inventory Management</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Visual Merchandising</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={experience}>
          <div className={container}>
            <div className={divStyle} />
            <header className={time}>
              July 2019 - Aug 2019
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://www.scsny.org/home' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className="mr-2 h-6 w-6 inline"
                        src="https://www.scsny.org/app/themes/sunnyside/assets/images/logo.png"
                        alt="SunnySide Logo"
                      />
                      SunnySide Community Service
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Volunteer - Assistant Camp Counselor</div>
              </h3>
              <p className={infoP}>
                Worked alongside instructors and counselors to deliver educational activities to adolescents of various age groups (Grades 1-8).
                Helped enforce and carry out policies regarding safety to create a safe and healthy environment to participants. Assisted in 
                escorting youths to and from program activity locations during trips and other recreational activities.
              </p>
              <ul className={skills}>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Creativity</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Communication</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Leadership</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ol>
      <div className={experience}>
        <a className={linkWrapper} href="https://alanport.netlify.app/files/resume.pdf">
          <span>
            <span class="whitespace-nowrap">
              <span className={linkText}> View Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class={arrowSvg}>
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Experience