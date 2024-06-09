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
								<a className={H3Container} href='https://github.com/Alan0893/Recipe' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Munchy Minions
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Streamlined meal planning for users by creating an app that fetches recipes based on available ingredients, improving user convenience by 30%, by integrating the 
								<a className={Links} href='https://spoonacular.com/food-api' target='_blank' rel='noreferrer'> Spoonacular API </a>.
								Ensured quick and easy retrieval of past recipes, reducing search time by 40%, by storing and managing user's histories in Firebase' Firestore. Integrated Google OAuth login via 
								Firebase, enhancing user security and streamlining authentication; increased user retention by 15% and reduced login-related issues by 30%. Simplified the grocery shopping process 
								by 50% by developing a feature that identifies missing ingredients and generates a shopping list using the 
								<a className={Links} href='https://www.unwrangle.com/' target='_blank' rel='noreferrer'> Unwrangle Sam's Club API</a>.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>NodeJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
							</ul>
						</div>
						<img 
							alt='recipe' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/recipe.svg'
						/>
					</div>
				</li>

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
								Leveraged the 
								<a className={Links} href='https://www.themoviedb.org/?language=en-US' target='_blank' rel='noreferrer'> TMDB (The Movie Database) API </a>
								to deliver up-to-the-minute data on trending movies and series, increasing content relevancy and boosting platform engagement by 15%. 
								Enabled access to current details, including descriptions, cast members, and character data for over 5000 movies and series.
								Capitalized the TMDB API to facilitate targeted searched for specific movies, series, or actor queries, enhancing user search experience by 30%.
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
							src='/assets/projects/streamsift.svg'
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
								notes, reducing data retrieval time by 30%. Employed Firebase database to efficiently store 
								and manage user collections and notes collections, ensuring high scalability and reliability. 
								Incorporated Firebase authentication system to enable secure user sign-in and 
								account creation, achieving a 99% user authentication success rate. Utilized Firebase storage 
								for seamless storage of user profile pictures. 
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
							src='/assets/projects/notecove.svg'
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