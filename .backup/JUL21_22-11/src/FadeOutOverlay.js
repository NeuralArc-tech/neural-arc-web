import React, { useEffect, useState } from 'react';

const FadeOutOverlay = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading when user reaches 30% of the first page
      const fadeStartPoint = windowHeight * 0.3;
      // Complete fade when reaching the transition page
      const fadeEndPoint = windowHeight * 0.5;
      
      if (scrollY >= fadeStartPoint && scrollY < windowHeight) {
        // Calculate opacity based on scroll position
        const fadeProgress = (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
        const newOpacity = Math.min(fadeProgress, 1);
        setOpacity(newOpacity);
      } else {
        // No fade before fade start point or after first page
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fade-out-overlay"
      style={{ 
        opacity: opacity,
        transition: 'opacity 0.1s ease-out'
      }}
    />
  );
};

export default FadeOutOverlay;