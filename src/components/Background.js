import React, { useState, useEffect } from 'react';
import Gradient from './Gradient';
import {
	BackgroundContainer,
	Mouse,
	ChildWrapper,
	BackgroundChild
} from '../styles/styles';

const Background = ({ children }) => {
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

	return (
		<Gradient>
			<div 
				className={BackgroundContainer} 
				style={{ minHeight: 'auto' }} 
				onMouseMove={handleMouseMove}
			>
				<div className="relative">
					<div 
						className={Mouse} 
						style={mouseStyle} 
					/>
					<div className={ChildWrapper}>
						<div className={BackgroundChild}>{children}</div>
					</div>
				</div>
			</div>
		</Gradient>
	)
}

export default Background;