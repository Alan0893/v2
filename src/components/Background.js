import React, { useState, useEffect } from 'react';

export const Background = ({ children }) => {
	const [mouseStyle, setMouseStyle] = useState(null);
	const [isMouseTrackingEnabled, setIsMouseTrackingEnabled] = useState(false);

	//  Handle side effects of React functional components
	useEffect(() => {
		// Called when the window is resized
		const handleResize = () => {
			// Updates the state based on current window width
			setIsMouseTrackingEnabled(window.innerWidth >= 1024);
		};

		// Handle setting the intial state based on the current window width
		handleResize();

		// Add an event listener to the resize event of the window
		window.addEventListener('resize', handleResize);

		return () => {
			// Remove the event listener for the resize event to prevent memory leaks
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Event handler for mouse movement
	const handleMouseMove = (event) => {
		if (isMouseTrackingEnabled) {
			// Get mouse coordinates and element dimensions
			const { clientX, clientY } = event;
			const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

			// Calculate spotlight position as a percentage of element dimensions
			const spotlightX = ((clientX - left) / width) * 100;
			const spotlightY = ((clientY - top) / height) * 100;

			// Generate the radial gradient color based on spotlightergfvbb ht
			const gradientColor = `radial-gradient(500px circle at ${spotlightX}% ${spotlightY}%, rgba(29, 78, 216, 0.15), transparent 80%)`;

			// Update the spotlight style state with the gradient color
			setMouseStyle({ background: gradientColor });
		}
	};

	// Setting the styling of the components
	const container = `
		bg-slate-900 
		leading-relaxed 
		text-slate-400 
		antialiased 
		selection:bg-sky-300 
		selection:text-sky-900
	`;
	const mouse = `
		pointer-events-none 
		fixed 
		inset-0 
		z-30 
		lg:absolute
	`;
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
	`;
	const child = `
		lg:flex 
		lg:justify-between 
		lg:gap-4
	`;

	return (
		<div 
			className={container} 
			style={{ minHeight: 'auto' }} 
			onMouseMove={handleMouseMove}
		>
			<div className="relative">
				<div 
					className={mouse} 
					style={mouseStyle} 
				/>
				<div className={position}>
					<div className={child}>{children}</div>
				</div>
			</div>
		</div>
	);
};
