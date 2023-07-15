import React from 'react';

const Projects22 = () => {
	// Setting the styling of the components
	const container = `
		grid
		grid-cols-1
		md:grid-cols-2
		gap-8
	`;
	const item = `
		mb-12
	`;
	const wrapper = `
		group
		relative
		grid 
		pb-1 
		transition-all 
		gap-4 
		p-5
		rounded-lg
	`;
	const divStyle = `
		absolute 
		inset-0
		z-0 
		hidden 
		rounded-md 
		lg:block 
		lg:group-hover:bg-slate-800/50 
	`;
	const info = `
		z-10 
		sm:col-span-6
	`;
	const h3Container = `
		group/link 
		inline-flex 
		font-medium 
		text-slate-200 
		hover:text-sky-400 
		focus-visible:text-blue-400
	`;
	const h3Span = `
		absolute 
		-inset-x-4 -inset-y-2.5 
		hidden 
		md:-inset-x-6 md:-inset-y-4 
		lg:block
	`;
	const linkSvg = `
		ml-1 
		inline-block 
		h-4 w-4 
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
	const img = `
		rounded 
		border-2 
		border-slate-200/10 
		transition 
		group-hover:border-slate-200/30 
		sm:order-1 
		sm:col-span-2 
		sm:translate-y-1
		mt-4 
		md:mt-0 
		lg:mt-0
		mb-3
	`;
	const tech = `
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
	const links = `
		group/link 
		text-slate-300
		hover:text-sky-300 
		focus-visible:text-sky-300
	`;
	const time = `
		text-xs 
		font-semibold 
		uppercase 
		text-slate-500 
		-mb-5
	`;	

  	return (
		<div>
			<ul className={container}>

				<li className={item}>
					<div className={wrapper}>
						<div className={divStyle} />
						<header className={time}>
							June - August
						</header>
						<div className={info}>
							<h3>
								<a className={h3Container} href='https://alcalculator.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={h3Span} />
									<span>
										Conversion Calculator
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={infoP}>
								Implements basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users
								to calculate a wide range of equations. Incorporates features for unit conversion, enabling users to effortlessly 
								convert between different units of measurements like area, length, and temperature.
							</p>
							<ul className={tech}>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='calculator' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={img} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127715761390096464/streamsift.netlify.app_Nest_Hub_Max.png'
						/>
					</div>
				</li>
				
			</ul>
		</div>
  	)
}

export default Projects22;