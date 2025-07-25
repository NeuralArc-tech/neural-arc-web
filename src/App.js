import React, { useState, useEffect } from 'react';
import './App.css';
import ParticleCanvas from './ParticleCanvas';
import ScrollIndicator from './ScrollIndicator';
import ScrollReveal from './ScrollReveal';
import FadeOutOverlay from './FadeOutOverlay';
import Orb from './Orb';
import ProductParticleFlow from './ProductParticleFlow';
import ProductDetails from './ProductDetails';
import TextScrubDetail from './pages/TextScrubDetail';
import TableScrubDetail from './pages/TableScrubDetail';
import TimeSeriesDetail from './pages/TimeSeriesDetail';
import StreamScrubDetail from './pages/StreamScrubDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu when page changes
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLearnMoreClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('product-details');
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToMain = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('main');
      setIsTransitioning(false);
    }, 300);
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage('product-details');
      setIsTransitioning(false);
    }, 300);
  };

  const handleScrubClick = (scrubType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(scrubType);
      setIsTransitioning(false);
    }, 300);
  };

  if (currentPage === 'text-scrub') {
    return (
      <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <header className="main-header">
          <div className="header-content">
            <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
              <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
              <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
            <a href="#" className="glass-button desktop-only">Contact Us</a>
          </div>
        </header>
        <TextScrubDetail onBack={handleBackToMain} />
      </div>
    );
  }

  if (currentPage === 'table-scrub') {
    return (
      <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <header className="main-header">
          <div className="header-content">
            <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
              <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
              <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
            <a href="#" className="glass-button desktop-only">Contact Us</a>
          </div>
        </header>
        <TableScrubDetail onBack={handleBackToMain} />
      </div>
    );
  }

  if (currentPage === 'timeseries-scrub') {
    return (
      <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <header className="main-header">
          <div className="header-content">
            <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
              <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
              <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
            <a href="#" className="glass-button desktop-only">Contact Us</a>
          </div>
        </header>
        <TimeSeriesDetail onBack={handleBackToMain} />
      </div>
    );
  }

  if (currentPage === 'stream-scrub') {
    return (
      <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <header className="main-header">
          <div className="header-content">
            <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
              <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
              <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
            <a href="#" className="glass-button desktop-only">Contact Us</a>
          </div>
        </header>
        <StreamScrubDetail onBack={handleBackToMain} />
      </div>
    );
  }

  if (currentPage === 'product-details') {
    return (
      <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <header className="main-header">
          <div className="header-content">
            <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
              <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
              <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
              <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
            </nav>
            <a href="#" className="glass-button desktop-only">Contact Us</a>
          </div>
        </header>
        <ProductDetails onBack={handleBackToMain} onScrubClick={handleScrubClick} />
      </div>
    );
  }

  return (
    <div className={`App page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      <header className="main-header">
        <div className="header-content">
          <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          </div>
          <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#" className="nav-item" onClick={() => { handleBackToMain(); toggleMobileMenu(); }}>HOME</a>
            <a href="#" className="nav-item" onClick={() => { handleProductsClick(); toggleMobileMenu(); }}>PRODUCTS</a>
            <a href="#" className="nav-item" onClick={toggleMobileMenu}>COMPANY</a>
            <a href="#" className="nav-item" onClick={toggleMobileMenu}>FAQ</a>
            <a href="#" className="glass-button mobile-only" onClick={toggleMobileMenu}>Contact Us</a>
          </nav>
          <a href="#" className="glass-button desktop-only">Contact Us</a>
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
        <ProductParticleFlow onLearnMoreClick={handleLearnMoreClick} />
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