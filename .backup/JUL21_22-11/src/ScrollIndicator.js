import React from 'react';

const ScrollIndicator = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="tagline">
        Bridging problems to intelligent, efficient solutions.
      </div>
      <div className="scroll-indicator" onClick={handleScroll}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L6 10H18L12 16Z" fill="white" />
        </svg>
      </div>
    </>
  );
};

export default ScrollIndicator;