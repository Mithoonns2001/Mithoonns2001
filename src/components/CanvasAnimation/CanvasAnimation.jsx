import React, { useRef, useEffect } from 'react';
import { Canvas } from 'canvas';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    // Set up initial animation properties
    let positionX = 0;
  
    // Animation loop
    const animate = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw and animate your objects
      context.fillStyle = 'blue';
      context.fillRect(positionX, 50, 100, 100);
  
      // Update animation properties
      positionX += 1;
  
      // Request the next frame of the animation
      requestAnimationFrame(animate);
    };
  
    // Start the animation loop
    animate();
  
  }, []);
  

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasAnimation;
