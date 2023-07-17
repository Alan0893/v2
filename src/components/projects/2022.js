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

import Stock from '../../assets/projects/stock.svg';
import Calc from '../../assets/projects/calc.svg';

const Projects22 = () => {	
  	return (
		<div>
			<ul className={ProjContainer}>

			<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							November
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://github.com/jasonw4/STOCK_PREDICTION' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Dow Jones Stock Predictor
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Developed a Python-based application using Streamlit to predict future trends based on past data. Leveraged 
								yfinance for retrieving historical stock data and utilized Prophet for time series forecasting. Incorporated 
								Plotly for interactive data visualization. Focused on stock prediction for Dow Jones companies. Provided an 
								intuitive user interface for selecting datasets and forecasting time periods. The project aimed to analyze 
								historical trends and generate insightful predictions to support decision-making in the stock market.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Python</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>Streamlit</div>
								</li>
							</ul>
						</div>
						<img 
							alt='stock' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src={Stock}
						/>
					</div>
				</li>

				<li className={Spacing}>
					<div className={ProjWrapper}>
						<div className={ProjDiv} />
						<div className={Time}>
							June - August
						</div>
						<div className={Info}>
							<h3>
								<a className={H3Container} href='https://alcalculator.netlify.app/' target='_blank' rel='noreferrer'>
									<span className={H3Span} />
									<span>
										Conversion Calculator
										<span className='inline-block'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
												<path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
											</svg>
										</span>
									</span>
								</a>
							</h3>
							<p className={InfoP}>
								Implements basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users
								to calculate a wide range of equations. Incorporates features for unit conversion, enabling users to effortlessly 
								convert between different units of measurements like area, length, and temperature.
							</p>
							<ul className={ChipWrapper}>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>HTML</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>CSS</div>
								</li>
								<li className='mr-1.5 mt-2'>
									<div className={Chip}>JavaScript</div>
								</li>
							</ul>
						</div>
						<img 
							alt='calc' 
							loading='lazy' 
							width='175' 
							height='109' 
							decoding='async'
							className={Image} 
							style={{ color: 'transparent' }} 
							src={Calc}
						/>
					</div>
				</li>

			</ul>
		</div>
  	)
}

export default Projects22