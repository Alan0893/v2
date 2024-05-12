import React from 'react';
import {
	Spacing,
	Info,
	H3Container,
	H3Span,
	LinkSvg,
	InfoP,
	Image,
	ChipWrapper,
	Chip,
	ProjContainer,
	ProjWrapper,
	ProjDiv,
	Links,
	Time
} from '../../styles/styles';

const Projects23 = () => {	
  	return (
		<div>
			<ul className={ProjContainer}>

			<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							January - May
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Recipe' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/recipe.ico'
											alt='favicon'
										/>
										Munchy Minion
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Integrates the 
								<a className={Links} href='https://spoonacular.com/food-api/docs' target='_blank' rel='noreferrer'> Spoonacular API </a>
								to generate recipes based on specified ingredients. In cases where certain ingredients are unavailable
								to the user, the system leverages the 
								<a className={Links} href='https://www.unwrangle.com/' target='_blank' rel='noreferrer'> Unwrangle API </a>
								to identify and source these products from Sam's Club. User authentication is managed through Firebase'seamless
								OAuth system, with search history and recipe collections stored in a Firestore database for each user.							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Firebase</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
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
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							April
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/Alan0893/Sprofile' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										<img
											className='mr-2 h-5 w-5 inline'
											src='/assets/projects/favicons/sprofile.ico'
											alt='favicon'
										/>
										Sprofile
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Utilizes the 
								<a className={Links} href='https://developer.spotify.com/documentation/web-api' target='_blank' rel='noreferrer'> Spotify API </a>
								to obtain User, Artists, Album, Playlist, Tracks, and Player information. Further utilizes the
								<a className={Links} href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/' target='_blank' rel='noreferrer'> TicketMaster API </a>
								to get an Artist's upcoming events. User authentication is managed through Spotify's OAuth system.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ReactJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>ExpressJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>OAuth</div>
								</li>
							</ul>
						</div>
						<img 
							alt='sprofile' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src='/assets/projects/sprofile.svg'
						/>
					</div>
				</li>

			</ul>
		</div>
  	)
}

export default Projects23