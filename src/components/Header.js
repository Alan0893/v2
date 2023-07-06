import React from 'react'

const Header = () => {
  // Setting the styling of the components
  const head = `
    lg:sticky
    lg:top-0
    lg:flex
    lg:max-h-screen
    lg:w-1/2
    lg:flex-col
    lg:justify-between
    lg:py-24
  `
  const h1 = `
    text-4xl
    font-bold
    tracking-tight
    text-slate-200
    sm:text-5xl
  `
  const h2 = `
    mt-3
    text-lg
    font-medium
    tracking-tight
    text-slate-200
    sm:text-xl
  `
  const p = `
    mt-4
    max-w-xs
    leading-normal
  `
  const nav = `
    nav 
    hidden 
    lg:block
  `
  const ul = `
    mt-5
    w-max
    
  `
  const aNav = `
    group
    flex
    items-center
    py-3
  `
  const spanNav = `
    nav-indicator 
    mr-4 
    h-px 
    w-8 
    bg-slate-600 
    transition-all 
    group-hover:w-16 
    group-hover:bg-slate-200 
    group-focus-visible:w-16 
    group-focus-visible:bg-slate-200 
    motion-reduce:transition-none
  `
  const spanTextNav = `
    nav-text 
    text-xs 
    font-bold 
    uppercase 
    tracking-widest 
    text-slate-500 
    group-hover:text-slate-200 
    group-focus-visible:text-slate-200
  `
  const ulMedia = `
    ml-1
    mt-8
    flex
    items-center
  `
  const liMedia = `
    mr-5 
    text-xs
  `
  const aMedia = `
    block
    hover:text-slate-200
  `

  return (
    <header className={head}>
      <div>
        <h1 className={h1}>
          <a href='/'>Alan Lin</a>
        </h1>
        <h2 className={h2}>
          CS Student at Boston University
        </h2>
        <p className={p}>
          I have a strong passion for software engineering and a strong desire to delve into the technological sector.
        </p>

        <nav className={nav} aria-label="Navigation Menu">
          <ul className={ul}>

            <li>
              <a className={ `${aNav} active `} href="#about">
                <span className={spanNav}></span>
                <span className={spanTextNav}> About</span>
              </a>
            </li>

            <li>
              <a className={aNav} href='#experience'>
                <span className={spanNav}></span>
                <span className={spanTextNav}> Experience</span>
              </a>
            </li>

            <li>
              <a className={aNav} href="#projects">
                <span className={spanNav}></span>
                <span className={spanTextNav}> Projects</span>
              </a>
            </li>

            <li>
              <a className={aNav} href="#contacts">
                <span className={spanNav}></span>
                <span className={spanTextNav}> Contacts</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
      
      <ul className={ulMedia} aria-label='media'>
        <li className={liMedia}>
          <a className={aMedia} href='https://github.com/Alan0893' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Github</span>
            <svg xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16' fill='currentColor' className='h-6 w-6' aria-hidden='true'>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
          </a>
        </li>

        <li className={liMedia}>
          <a className={aMedia} href='https://www.linkedin.com/in/alanl193/' target='_blank' rel='noreferrer'>
            <span className='sr-only'>LinkedIn</span>
            <svg xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6' aria-hidden='true'>
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
          </a>
        </li>

        <li className={liMedia}>
          <a className={aMedia} href='https://devpost.com/Alan0893' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Devpost</span>
            <svg xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6' aria-hidden='true'>
                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>              </svg>
          </a>
        </li>

        <li className={liMedia}>
          <a className={aMedia} href='mailto:alanl07905@gmail.com' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Mail</span>
            <svg xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16' fill='currentColor' className='h-6 w-6' aria-hidden='true'>
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
          </a>
        </li>

      </ul>
    </header>
  )
};

export default Header;