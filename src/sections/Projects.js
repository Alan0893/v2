import React from 'react'

const Projects = () => {
	// Setting the styling of the components
	const container = `
		group/list
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
	const info = `
		z-10 
		sm:order-2 
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
	const links = `
		group/link 
		text-slate-300
		hover:text-sky-300 
		focus-visible:text-sky-300
	`;

  	return (
		<div>
			<ul className={container}>

				<li className={item}>
					<div className={wrapper}>
						<div className={divStyle} />
						<div className={info}>
							<h3>
								<a className={h3Container} href='https://streamsift.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={h3Span} />
									<span>
										StreamSift
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={infoP}>
								Harnesses the capabilities of the 
								<a className={links} href='https://www.themoviedb.org/?language=en-US' target='_blank' rel='noreferrer'> TMDB (The Movie Database) API </a>
								to deliver timely and accurate information on popular movies and series. 
								Users can access up-to-date details, including movie/show descriptions, 
								cast members, and character information. Utilizes the TMDB API to target 
								searches for specific movie, series, or actor queries.
							</p>
							<ul className={tech}>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>Material UI</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='streamsift' 
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

				<li className={item}>
					<div className={wrapper}>
						<div className={divStyle} />
						<div className={info}>
							<h3>
								<a className={h3Container} href='https://notecove.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={h3Span} />
									<span>
										NoteCove
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={infoP}>
								Implemented an API leveraging Firebase functions to seamlessly access user information and 
								notes. Employed Firebase database to efficiently store and manage user collections and notes 
								collections. Incorporated Firebase authentication system to enable secure user sign-in and 
								account creation. Utilized Firebase storage for seamless storage of user profile pictures. 
								Developed a ReactJS application to provide an intuitive and visually appealing user interface 
								for managing and displaying user notes upon user login.
							</p>
							<ul className={tech}>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>Material UI</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>Google Cloud</div>
								</li>
							</ul>
						</div>
						<img 
							alt='notecove' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={img} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127774251986976769/notecove.netlify.app_Nest_Hub_Max.png'
						/>
					</div>
				</li>

				<li className={item}>
					<div className={wrapper}>
						<div className={divStyle} />
						<div className={info}>
							<h3>
								<a className={h3Container} href='https://countrx.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={h3Span} />
									<span>
										Countrx
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={linkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd'></path>
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={infoP}>
								Integrated the 
								<a className={links} href='https://restcountries.com/' target='_blank' rel='noreferrer'> RESTful Countries API </a>
								to fetch and display comprehensive data about different countries. Leveraged the 
								<a className={links} href='https://developers.google.com/maps/documentation/embed/get-started' target='_blank' rel='noreferrer'> Google Maps Embed API </a>
								to showcase an interactive map of specified country. This project offers an engaging 
								and informative user experience, allowing users to explore diverse countries and access relevant 
								geographical details effortlessly.
							</p>
							<ul className={tech}>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='countrx' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={img} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127774739906183319/countrx.netlify.app_country_country.html_searchfranceNest_Hub_Max.png'
						/>
					</div>
				</li>

			</ul>
			<div className={item}>
				<a className={linkWrapper} href='/projects'>
				<span>
					<span className='whitespace-nowrap'>
					<span className={linkText}> View All Projects</span>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={arrowSvg}>
						<path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd'></path>
					</svg>
					</span>
				</span>
				</a>
			</div>
		</div>
  	)
}

export default Projects