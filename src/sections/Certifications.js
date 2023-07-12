import React from 'react'

const Certifications = () => {
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
              Issued May 2023
            </header>
            <div className={info}>
              <h3 className={h3}>
                <div>
                  <a className={h3Container} href='https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code' target='_blank' rel='noreferrer'>
                    <span className={h3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                        alt='Google'
                      />
                      Fundamentals of Digital Marketing
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Google Digital Garage</div>
              </h3>
              <p className={infoP}>
                <b>Credential ID:</b> WZW TM2 Q94
              </p>
              <ul className={skills}>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Marketing</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>SEO</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={chip}>Web Analytics</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ol>
    </div>
  )
}

export default Certifications