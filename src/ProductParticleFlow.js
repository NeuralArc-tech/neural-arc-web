import React from 'react';
import './ProductParticleFlow.css';

const ProductParticleFlow = ({ onLearnMoreClick }) => {
    // Create array of particles - 200 particles
    const particles = Array.from({ length: 200 }, (_, i) => {
        // Randomly assign shapes
        const shapes = ['cube', 'triangle', 'ball', 'hexagon'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Generate random stream offset for more natural distribution
        // Using a normal distribution-like approach for better funnel shape
        const randomFactor = (Math.random() - 0.5) * 2; // -1 to 1
        const gaussianRandom = (Math.random() + Math.random() + Math.random() - 1.5) / 1.5; // Approximate gaussian
        const streamOffset = gaussianRandom * 80; // Range roughly -80 to 80
        
        // Generate evenly distributed delays with slight randomization
        // This ensures continuous spawning with no gaps
        const baseDelay = (i / 200) * 4; // Evenly distribute across 4 seconds
        const randomOffset = (Math.random() - 0.5) * 0.2; // Add small random variation
        const randomDelay = (baseDelay + randomOffset) % 4; // Wrap around to stay within 0-4
        
        return { 
            id: i, 
            shape: randomShape,
            streamOffset: streamOffset,
            animationDelay: randomDelay
        };
    });

    // SVG shape components
    const renderShape = (shape, index) => {
        switch (shape) {
            case 'cube':
                return (
                    <svg className="particle-shape" viewBox="0 0 30 30" width="18" height="18">
                        <rect x="10" y="10" width="10" height="10" fill="white" />
                    </svg>
                );
            case 'triangle':
                return (
                    <svg className="particle-shape" viewBox="0 0 30 30" width="18" height="18">
                        <polygon points="15,10 22,22 8,22" fill="white" />
                    </svg>
                );
            case 'ball':
                return (
                    <svg className="particle-shape" viewBox="0 0 30 30" width="18" height="18">
                        <circle cx="15" cy="15" r="6" fill="white" />
                    </svg>
                );
            case 'hexagon':
                return (
                    <svg className="particle-shape" viewBox="0 0 30 30" width="18" height="18">
                        <polygon points="15,9 21,12 21,18 15,21 9,18 9,12" fill="white" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {/* Content group container */}
            <div className="content-group">
                {/* Data Scrub Engine text on left side */}
                <div className="data-scrub-text">Data Scrub Engine</div>
                <div className="data-scrub-subtitle">From Data Chaos to Clarity.</div>
                
                {/* Learn More button */}
                <button className="learn-more-button" onClick={onLearnMoreClick}>
                    <span className="button-text">Learn More</span>
                    <svg className="button-arrow" width="20" height="20" viewBox="0 0 20 20">
                        <polygon points="7,5 13,10 7,15" fill="#FFFFFF" />
                    </svg>
                </button>
            </div>
            
            <div className="particle-flow-container">
                {/* Portal ellipse at spawn point */}
                <div className="portal-ellipse" />
                
                {particles.map((particle) => (
                <div 
                    key={particle.id} 
                    className={`particle-wrapper particle-${particle.shape}`}
                    style={{
                        '--stream-offset': `calc(${particle.streamOffset}% * 0.5)`,
                        '--particle-delay': `${particle.animationDelay}s`
                    }}
                >
                    {/* Shape before processing */}
                    <div className="particle-before">
                        {renderShape(particle.shape, particle.id)}
                    </div>
                    {/* Dash after processing */}
                    <div className="particle-after particle-dash" />
                </div>
            ))}
            </div>
        </>
    );
};

export default ProductParticleFlow;