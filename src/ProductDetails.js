import React from 'react';
import './ProductDetails.css';
import PixelTransition from './PixelTransition';

function ProductDetails({ onBack, onScrubClick }) {
  return (
    <div className="product-details-page">
      <div className="product-header">
        <div className="product-title-group">
          <h1 className="product-title">[ PRODUCT ]</h1>
          <h2 className="product-name">DATA SCRUB ENGINE</h2>
        </div>
        
        <div className="scrub-types-grid">
          {/* Decorative elements positioned behind scrub icons */}
          <img src="/assets/Cubes.png" alt="" className="decorative-cubes" />
          <img src="/assets/Pipe.png" alt="" className="decorative-pipe" />
          
          <div className="scrub-item" onClick={() => onScrubClick('text-scrub')}>
            <PixelTransition
              firstContent={
                <img src="/assets/textscrub.png" alt="Text Scrub" className="scrub-icon" />
              }
              secondContent={
                <img src="/assets/textscrub-after-hover.png" alt="Text Scrub Hover" className="scrub-icon-hover" />
              }
              gridSize={30}
              pixelColor="white"
              animationStepDuration={0.3}
              className="scrub-pixel-transition"
              aspectRatio="0"
            />
            <span className="scrub-label">Text Scrub</span>
          </div>
          <div className="scrub-item" onClick={() => onScrubClick('table-scrub')}>
            <PixelTransition
              firstContent={
                <img src="/assets/tablescrub.png" alt="Table Scrub" className="scrub-icon" />
              }
              secondContent={
                <img src="/assets/tablescrub-after-hover.png" alt="Table Scrub Hover" className="scrub-icon-hover" />
              }
              gridSize={30}
              pixelColor="white"
              animationStepDuration={0.3}
              className="scrub-pixel-transition"
              aspectRatio="0"
            />
            <span className="scrub-label">Table Scrub</span>
          </div>
          <div className="scrub-item" onClick={() => onScrubClick('timeseries-scrub')}>
            <PixelTransition
              firstContent={
                <img src="/assets/timeseriesscrub.png" alt="Timeseries Scrub" className="scrub-icon" />
              }
              secondContent={
                <img src="/assets/timeseriesscrub-after-hover.png" alt="Timeseries Scrub Hover" className="scrub-icon-hover" />
              }
              gridSize={30}
              pixelColor="white"
              animationStepDuration={0.3}
              className="scrub-pixel-transition"
              aspectRatio="0"
            />
            <span className="scrub-label">Timeseries Scrub</span>
          </div>
          <div className="scrub-item" onClick={() => onScrubClick('stream-scrub')}>
            <PixelTransition
              firstContent={
                <img src="/assets/streamscrub.png" alt="Stream Scrub" className="scrub-icon" />
              }
              secondContent={
                <img src="/assets/streamscrub-after-hover.png" alt="Stream Scrub Hover" className="scrub-icon-hover" />
              }
              gridSize={30}
              pixelColor="white"
              animationStepDuration={0.3}
              className="scrub-pixel-transition"
              aspectRatio="0"
            />
            <span className="scrub-label">Stream Scrub</span>
          </div>
        </div>
      </div>
      <div className="product-details-content">
        {/* Blank page for now - content will be added later */}
      </div>
    </div>
  );
}

export default ProductDetails;