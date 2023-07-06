import React, { useState } from 'react';

export const Background = ({ children }) => {
	const [mouseStyle, setMouseStyle] = useState(null);

	// Event handler for mouse movement
	const handleMouseMove = (event) => {
		// Get mouse coordinates and element dimensions
		const { clientX, clientY } = event;
		const { left, top } = event.currentTarget.getBoundingClientRect();
		const width = window.innerWidth;
		const height = window.innerHeight;

		// Calculate spotlight position as a percentage of element dimensions
		const spotlightX = ((clientX - left) / width) * 100;
		const spotlightY = ((clientY - top) / height) * 100;

		// Generate the radial gradient color based on spotlight
		const gradientColor = `radial-gradient(500px circle at ${spotlightX}% ${spotlightY}%, rgba(29, 78, 216, 0.15), transparent 80%)`;

		// Update the spotlight style state with the gradient color
		setMouseStyle({ background: gradientColor });
	};

	// Setting the styling of the components
	const container = `
		bg-slate-900
		leading-relaxed
		text-slate-400
		antialiased
		selection:bg-teal-300
		selection:text-teal-900
	`;
	const mouse = `
		pointer-events-none 
		fixed 
		inset-0 
		z-30 
		transition 
		duration-300 
		lg:absolute
	`
	const position = `
		mx-auto 
		min-h-screen 
		max-w-screen-xl 
		px-6 py-12 
		font-sans 
		md:px-12 
		md:py-20 
		lg:px-24 
		lg:py-0
	`
	
	// Return component
  	return (
		<div
			className={container}
			style={{ minHeight: '100vh' }}
			onMouseMove={handleMouseMove}
		>
			<div className='relative'>
				<div
					className={mouse}
					style={mouseStyle}
				/>
				<div className={position}>
					{ children }
				</div>
			</div>
		</div>
  	);
};
