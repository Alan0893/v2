import React, { useState } from 'react';

export const Background = ({ children }) => {
	const [spotlightStyle, setSpotlightStyle] = useState(null);

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event;
		const { left, top, width, height } = event.target.getBoundingClientRect();
		const spotlightX = ((clientX - left) / width) * 100;
		const spotlightY = ((clientY - top) / height) * 100;
		const gradientColor = `radial-gradient(500px circle at ${spotlightX}% ${spotlightY}%, rgba(29, 78, 216, 0.15), transparent 80%)`;

		setSpotlightStyle({ background: gradientColor });
	};

  	return (
		<div
			className='
				bg-slate-900 
				leading-relaxed 
				text-slate-400 
				antialiased 
				selection:bg-teal-300 
				selection:text-teal-900
			'
			style={{ minHeight: '100vh' }}
			onMouseMove={handleMouseMove}
		>
			<div className='relative'>
				<div
					className='
						pointer-events-none 
						fixed 
						inset-0 
						z-30 
						transition 
						duration-300 
						lg:absolute
					'
					style={spotlightStyle}
				/>
				<div className='
					mx-auto 
					min-h-screen 
					max-w-screen-xl 
					px-6 py-12 
					font-sans 
					md:px-12 
					md:py-20 
					lg:px-24 
					lg:py-0
				'>
					<div className='
						lg:flex
						lg:justify-between
						lg:gap-4
					'>
						{ children }
					</div>
				</div>
			</div>
		</div>
  	);
};
