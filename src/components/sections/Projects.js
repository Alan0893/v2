import React from 'react';
import { Link } from 'react-router-dom';
import {
	ProjectsContainer,
	Spacing,
	Container,
	DivStyles,
	Info,
	H3Container,
	H3Span,
	LinkSvg,
	InfoP,
	Image,
	ChipWrapper,
	Chip,
	LinkWrapper,
	LinkText,
	RightArrowSvg,
	Links
} from '../../styles/styles';

const Projects = () => {
  	return (
		<div>
			<ul className={ProjectsContainer}>

				<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://streamsift.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										StreamSift
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Harnesses the capabilities of the 
								<a className={Links} href='https://www.themoviedb.org/?language=en-US' target='_blank' rel='noreferrer'> TMDB (The Movie Database) API </a>
								to deliver timely and accurate information on popular movies and series. 
								Users can access up-to-date details, including movie/show descriptions, 
								cast members, and character information. Utilizes the TMDB API to target 
								searches for specific movie, series, or actor queries.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Material UI</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='streamsift' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127715761390096464/streamsift.netlify.app_Nest_Hub_Max.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://notecove.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										NoteCove
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Implemented an API leveraging Firebase functions to seamlessly access user information and 
								notes. Employed Firebase database to efficiently store and manage user collections and notes 
								collections. Incorporated Firebase authentication system to enable secure user sign-in and 
								account creation. Utilized Firebase storage for seamless storage of user profile pictures. 
								Developed a ReactJS application to provide an intuitive and visually appealing user interface 
								for managing and displaying user notes upon user login.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Material UI</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Google Cloud</div>
								</li>
							</ul>
						</div>
						<img 
							alt='notecove' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127774251986976769/notecove.netlify.app_Nest_Hub_Max.png'
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={Container}>
						<div className={DivStyles} />
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://countrx.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Countrx
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Integrated the 
								<a className={Links} href='https://restcountries.com/' target='_blank' rel='noreferrer'> RESTful Countries API </a>
								to fetch and display comprehensive data about different countries. Leveraged the 
								<a className={Links} href='https://developers.google.com/maps/documentation/embed/get-started' target='_blank' rel='noreferrer'> Google Maps Embed API </a>
								to showcase an interactive map of specified country. This project offers an engaging 
								and informative user experience, allowing users to explore diverse countries and access relevant 
								geographical details effortlessly.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='countrx' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='https://cdn.discordapp.com/attachments/880994363805696020/1127774739906183319/countrx.netlify.app_country_country.html_searchfranceNest_Hub_Max.png'
						/>
					</div>
				</li>

			</ul>
			
			<div className={Spacing}>
				<Link className={LinkWrapper} to='/projects' onClick={() => window.scroll(0,0)}>
					<span>
						<span className='whitespace-nowrap'>
						<span className={LinkText}> View All Projects</span>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={RightArrowSvg}>
							<path fillRule='evenodd' d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z' clipRule='evenodd' />
						</svg>
						</span>
					</span>
				</Link>
			</div>
		</div>
  	)
}

export default Projects;