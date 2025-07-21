import React from 'react';
import './App.css';
import ParticleCanvas from './ParticleCanvas';
import ScrollIndicator from './ScrollIndicator';
import ScrollReveal from './ScrollReveal';
import FadeOutOverlay from './FadeOutOverlay';
import Orb from './Orb';
import ProductParticleFlow from './ProductParticleFlow';

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="header-content">
          <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
          <nav className="main-nav">
            <a href="#" className="nav-item">COMPANY</a>
            <a href="#" className="nav-item">PRODUCTS</a>
            <a href="#" className="nav-item">NEWS</a>
            <a href="#" className="nav-item">FAQ</a>
          </nav>
          <a href="#" className="glass-button">Contact Us</a>
        </div>
      </header>

      <div className="canvas-container">
        <ParticleCanvas />
        <div className="glow-flare"></div>
        <div className="gradient-overlay"></div>
        <div className="logo-overlay">
          <img src="/logo/neural-arc-logo-white.svg" alt="Neural Arc Logo Glow" className="logo-glow" />
          <img src="/logo/neural-arc-logo-white.svg" alt="Neural Arc Logo" className="main-logo" />
        </div>
        <ScrollIndicator />
        <FadeOutOverlay />
      </div>

      {/* Transition Page - Text Reveal */}
      <div className="transition-page">
        <div className="transition-content">
          <ScrollReveal
            baseOpacity={0.9}
            enableBlur={true}
            baseRotation={10}
            blurStrength={14}
            containerClassName="transition-text-container"
            textClassName="transition-text"
          >
            Good things start with high-quality data.
          </ScrollReveal>
          <div className="orb-container">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>

      {/* Third Page - Product Page */}
      <div className="product-page">
        <ProductParticleFlow />
        <div className="product-content">
          {/* Left side content area (you can add product info here later) */}
          <div className="product-left">
            {/* Product content will go here */}
          </div>
          
          {/* Right side with metallic object */}
          <div className="product-right">
            <div className="metallic-object-container">
              <img 
                src="/assets/metalic-object.svg" 
                alt="Metallic Object" 
                className="metallic-object"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;