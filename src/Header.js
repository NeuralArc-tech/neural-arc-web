import React from 'react';

function Header({ toggleMobileNav, isMobileNavOpen, onProducts, onHome }) {
  return (
    <header className="main-header">
      <div className="header-content">
        <img src="/logo/logo-web.png" alt="Neural Arc Logo" className="header-logo" />
        <div
          className="burger"
          onClick={toggleMobileNav}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileNavOpen}
          tabIndex="0"
        >
          ☰
        </div>
        <nav className={`main-nav ${isMobileNavOpen ? 'open' : ''}`}>
          <a href="#" className="nav-item">COMPANY</a>
          <a href="#" className="nav-item" onClick={onProducts}>PRODUCTS</a>
          <a href="#" className="nav-item" onClick={onHome}>HOME</a>
          <a href="#" className="nav-item">FAQ</a>
        </nav>
        <a href="#" className="glass-button">Contact Us</a>
      </div>
    </header>
  );
}

export default Header;
