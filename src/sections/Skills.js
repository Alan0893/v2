import React from 'react'

const Skills = () => {
  // Setting the styling of the components
  const skills = `
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
  const level = `
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
  const lang = `
    mt-2
    flex
    flex-wrap
  `;
  const chip = `
    flex 
    items-center 
    rounded-2xl 
    bg-sky-400/10 
    px-3 py-1
    text-xs 
    font-medium 
    leading-5
    text-sky-300
  `;
  const chipText = `
    ml-2
    mr-2
  `
  const chipImage = `
    w-6
    h-6
    lg:w-5
    lg:h-5
    mt-1
    mb-1
    lg:mt-0
    lg:mb-0
  `

  return (
	  <div>
      <ol>

        <li className={skills}>
          <div className={container}>
            <div className={divStyle} />
            <header className={level}>
              Comfortable
            </header>
            <div className={info}>
              <ul className={lang}>
                <li className='mr-1.5 mt-1'> 
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/java-4.svg' alt='java' className={chipImage} />
                    <span className={chipText}>Java</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/html-1.svg' alt='html' className={chipImage} />
                    <span className={chipText}>HTML</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/css-3.svg' alt='css' className={chipImage} />
                    <span className={chipText}>CSS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' alt='javascript' className={chipImage} />
                    <span className={chipText}>JavaScript</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='reactjs' className={chipImage} />
                    <span className={chipText}>ReactJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/git-icon.svg' alt='git' className={chipImage} />
                    <span className={chipText}>Git</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={skills}>
          <div className={container}>
            <div className={divStyle} />
            <header className={level}>
              Familiar
            </header>
            <div className={info}>
              <ul className={lang}>
              <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/python-5.svg' alt='python' className={chipImage} />
                    <span className={chipText}>Python</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://www.svgrepo.com/show/353478/bash-icon.svg' alt='bash' className={chipImage} />
                    <span className={chipText}>Bash</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://user-images.githubusercontent.com/5421823/62779159-4cf76880-baaa-11e9-8318-e20a1aaa913a.png' alt='x86 assembly' className={chipImage} />
                    <span className={chipText}>x86 Assembly</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/c-1.svg' alt='c' className={chipImage} />
                    <span className={chipText}>C</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg' alt='firebase' className={chipImage} />
                    <span className={chipText}>Firebase</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.worldvectorlogo.com/logos/arduino-1.svg' alt='arduino' className={chipImage} />
                    <span className={chipText}>Arduino</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={skills}>
          <div className={container}>
            <div className={divStyle} />
            <header className={level}>
              Currently Learning
            </header>
            <div className={info}>
              <ul className={lang}>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://cdn.discordapp.com/attachments/880994363805696020/1126622621124014080/latex-tutorial-removebg-preview.png' alt='latex' className={chipImage} />
                    <span className={chipText}>LaTeX</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://www.svgrepo.com/show/354113/nextjs-icon.svg' alt='nextjs' className={chipImage} />
                    <span className={chipText}>NextJS</span>
                  </div>
                </li>
                <li className='mr-1.5 mt-1'>
                  <div className={chip}>
                    <img src='https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=svg' alt='expressjs' className={chipImage} />
                    <span className={chipText}>ExpressJS</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ol>
    </div>
  )
}

export default Skills