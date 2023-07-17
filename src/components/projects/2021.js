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

import Brawl from '../../assets/projects/brawl.svg';

const Projects23 = () => {	
  	return (
		<div>
			<ul className={ProjContainer}>

			<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							September
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://www.npmjs.com/package/brawldata.js' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Brawldata.js
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								The API wrapper for the BrawlApi is designed to simplify the retrieval of specific 
								game data. By utilizing JavaScript, it efficiently calls the BrawlApi, extracts the 
								desired information from the JSON response, and returns the relevant data. This wrapper 
								provides developers with a convenient and streamlined approach to accessing the BrawlApi 
								API, enhancing the ease and efficiency of making API calls.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>NodeJS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>REST APIs</div>
								</li>
							</ul>
						</div>
						<img 
							alt='brawl' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src={Brawl}
						/>
					</div>
				</li>

			</ul>
		</div>
  	)
}

export default Projects23