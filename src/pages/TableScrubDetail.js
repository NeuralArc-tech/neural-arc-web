import React, { useState } from 'react';
import './TableScrubDetail.css';

function TableScrubDetail({ onBack }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const features = [
    {
      icon: "🔄",
      title: "Deduplication",
      description: "Multi-algorithm fuzzy matching with confidence scoring",
      showcase: {
        type: "duplicate_detection",
        title: "Duplicate Detection",
        icon: "🔍"
      }
    },
    {
      icon: "🗃️",
      title: "Standardization", 
      description: "Format addresses, phones, currencies to enterprise standards",
      showcase: {
        type: "format_standardization",
        title: "Format Standardization",
        icon: "🔧"
      }
    },
    {
      icon: "🛡️",
      title: "Validation",
      description: "Schema-aware validators for business rule compliance",
      showcase: {
        type: "validation_errors",
        title: "Validation Errors",
        icon: "❌"
      }
    },
    {
      icon: "↩️",
      title: "Point-in-Time Undo",
      description: "Roll back any transformation to previous save points",
      showcase: {
        type: "undo_capability",
        title: "Undo Capability",
        icon: "⏪"
      }
    },
    {
      icon: "🎯",
      title: "Confidence Scoring",
      description: "Each record carries merge confidence and audit trail",
      showcase: {
        type: "confidence_scoring",
        title: "Confidence Scoring",
        icon: "📊"
      }
    }
  ];

  const beforeData = [
    { name: "John Smith", email: "john@email.com", phone: "555-123-4567" },
    { name: "Smith, John", email: "JOHN@EMAIL.COM", phone: "5551234567" },
    { name: "Jon Smith", email: "john@gmail.com", phone: "555.123.4567" }
  ];

  const afterData = [
    { 
      name: "John Smith", 
      email: "john@email.com", 
      phone: "+15551234567", 
      confidence: "0.92",
      status: "merged"
    },
    { 
      name: "John Smith", 
      email: "john@gmail.com", 
      phone: "+15551234567", 
      confidence: "singleton",
      status: "unique"
    }
  ];

  const useCases = [
    {
      title: "Customer Data Deduplication",
      description: "Merge customer records with slight variations in names, emails, and phone numbers",
      industry: "CRM"
    },
    {
      title: "Financial Reconciliation", 
      description: "Standardize transaction formats, currencies, and detect duplicate payments",
      industry: "Finance"
    },
    {
      title: "Product Catalog Cleanup",
      description: "Normalize SKUs, standardize units, and fill missing categories",
      industry: "E-commerce"
    }
  ];

  const supportedFormats = ["CSV", "XLSX", "Parquet", "JSON", "TSV"];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setShowResult(true);
  };

  const handleDemo = () => {
    setShowResult(true);
  };

  const renderShowcase = (feature) => {
    const showcase = feature.showcase;
    
    switch (showcase.type) {
      case "duplicate_detection":
        return (
          <div className="tablescrub-showcase-content">
            <div className="tablescrub-similarity-match">
              <div className="tablescrub-match-item">
                <span className="tablescrub-match-text">john@email.com</span>
                <span className="tablescrub-match-similarity">vs</span>
                <span className="tablescrub-match-text">JOHN@EMAIL.COM</span>
              </div>
              <div className="tablescrub-confidence-bar">
                <div className="tablescrub-confidence-fill" style={{width: '95%'}}></div>
              </div>
              <span className="tablescrub-confidence-score">95% match</span>
            </div>
          </div>
        );
      
      case "format_standardization":
        return (
          <div className="tablescrub-showcase-content">
            <div className="tablescrub-format-example">
              <div className="tablescrub-format-before">
                <span className="tablescrub-format-label">Before:</span>
                <span className="tablescrub-format-text">08123456789</span>
              </div>
              <div className="tablescrub-format-arrow">→</div>
              <div className="tablescrub-format-after">
                <span className="tablescrub-format-label">After:</span>
                <span className="tablescrub-format-text">+62-812-3456-789</span>
              </div>
            </div>
          </div>
        );
      
      case "validation_errors":
        return (
          <div className="tablescrub-showcase-content">
            <div className="tablescrub-validation-item">
              <span className="tablescrub-invalid-data">invalid@email</span>
              <span className="tablescrub-error-badge">Invalid Email</span>
            </div>
            <div className="tablescrub-validation-item">
              <span className="tablescrub-invalid-data">555-INVALID</span>
              <span className="tablescrub-error-badge">Invalid Phone</span>
            </div>
            <div className="tablescrub-validation-stats">
              <span className="tablescrub-stat">234 errors found</span>
            </div>
          </div>
        );
      
      case "undo_capability":
        return (
          <div className="tablescrub-showcase-content">
            <div className="tablescrub-undo-timeline">
              <div className="tablescrub-undo-step tablescrub-undo-current">
                <span className="tablescrub-undo-icon">📝</span>
                <span className="tablescrub-undo-label">Current State</span>
              </div>
              <div className="tablescrub-undo-step">
                <span className="tablescrub-undo-icon">🔄</span>
                <span className="tablescrub-undo-label">After Deduplication</span>
              </div>
              <div className="tablescrub-undo-step">
                <span className="tablescrub-undo-icon">📂</span>
                <span className="tablescrub-undo-label">Original Upload</span>
              </div>
            </div>
            <button className="tablescrub-undo-button">
              ⏪ Restore to checkpoint
            </button>
          </div>
        );
      
      case "confidence_scoring":
        return (
          <div className="tablescrub-showcase-content">
            <div className="tablescrub-confidence-display">
              <div className="tablescrub-confidence-score-large">94.2%</div>
              <div className="tablescrub-confidence-details">
                <div className="tablescrub-audit-item">✓ 3 records merged</div>
                <div className="tablescrub-audit-item">✓ Phone standardized</div>
                <div className="tablescrub-audit-item">✓ Email validated</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="tablescrub-detail-page">
      {/* Hero Section */}
      <section className="tablescrub-hero">
        <div className="tablescrub-container">
          <div className="tablescrub-hero-content">
            <div className="tablescrub-badge">
              TableScrub Engine
            </div>
            
            <h1 className="tablescrub-hero-title">
              Transform messy tables into{" "}
              <span className="tablescrub-highlight">golden records</span>
            </h1>
            
            <p className="tablescrub-hero-description">
              Eliminate duplicates, normalize formats, and validate business rules in 
              relational and spreadsheet data with machine learning precision.
            </p>

            <div className="tablescrub-hero-buttons">
              <button className="tablescrub-btn-primary">
                Try TableScrub
              </button>
            </div>

            <div className="tablescrub-supported-formats">
              <span>Supports:</span>
              {supportedFormats.map((format, index) => (
                <span key={index} className="tablescrub-format-badge">
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="tablescrub-problem-section">
        <div className="tablescrub-container">
          <div className="tablescrub-section-header">
            <h2 className="tablescrub-section-title">Data quality issues cost you time and money</h2>
          </div>
          
          <div className="tablescrub-problem-grid">
            <div className="tablescrub-problem-card">
              <div className="tablescrub-problem-stat">51%</div>
              <h3 className="tablescrub-problem-card-title">Duplicates</h3>
              <p className="tablescrub-problem-card-description">
                of enterprise datasets contain duplicate records due to typos and format variations
              </p>
              <p className="tablescrub-data-source">Source: <a href="https://www.edq.com/globalassets/white-papers/the-impact-of-bad-contact-data-quality.pdf/#:~:text=Of%20the%20organizations%20surveyed%2C%2023,of%20data%20errors%20occur%20as" target="_blank" rel="noopener noreferrer" className="tablescrub-source-link">edq.com</a></p>
            </div>
            
            <div className="tablescrub-problem-card">
              <div className="tablescrub-problem-stat">40%</div>
              <h3 className="tablescrub-problem-card-title">Format Drift</h3>
              <p className="tablescrub-problem-card-description">
                of data preparation time spent on standardizing inconsistent formats
              </p>
              <p className="tablescrub-data-source">Source: <a href="https://endgrate.com/blog/12-key-metrics-to-track-integration-success#:~:text=Here%27s%20something%20crazy%3A%20IBM%20says,or%20has%20holes%20in%20it" target="_blank" rel="noopener noreferrer" className="tablescrub-source-link">endgrate.com</a></p>
            </div>
            
            <div className="tablescrub-problem-card">
              <div className="tablescrub-problem-stat">58%</div>
              <h3 className="tablescrub-problem-card-title">Hidden Errors</h3>
              <p className="tablescrub-problem-card-description">
                of business decisions based on incomplete or inaccurate data
              </p>
              <p className="tablescrub-data-source">Source: <a href="https://www.globenewswire.com/news-release/2025/02/06/3022005/0/en/Bad-Data-Makes-Bad-Decisions-58-of-Leaders-Report-Companies-Using-Inaccurate-Data-for-Big-Decisions.html" target="_blank" rel="noopener noreferrer" className="tablescrub-source-link">globenewswire.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="tablescrub-features">
        <div className="tablescrub-container">
          <div className="tablescrub-section-header">
            <h2 className="tablescrub-section-title">Advanced Data Cleaning Features</h2>
            <p className="tablescrub-section-description">
              Powered by machine learning and statistical validation
            </p>
          </div>
          
          <div className="tablescrub-features-grid">
            <div className="tablescrub-features-list">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`tablescrub-feature-card ${
                    activeFeature === index ? 'tablescrub-feature-active' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="tablescrub-feature-header">
                    <div className={`tablescrub-feature-icon ${
                      activeFeature === index ? 'tablescrub-feature-icon-active' : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="tablescrub-feature-content">
                      <h3 className="tablescrub-feature-title">{feature.title}</h3>
                      <p className="tablescrub-feature-description">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="tablescrub-single-showcase">
              <div className="tablescrub-showcase-card">
                <div className="tablescrub-showcase-header">
                  <span className="tablescrub-showcase-icon">{features[activeFeature].showcase.icon}</span>
                  <h4 className="tablescrub-showcase-title">{features[activeFeature].showcase.title}</h4>
                </div>
                {renderShowcase(features[activeFeature])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Demo */}
      <section className="tablescrub-demo">
        <div className="tablescrub-container">
          <div className="tablescrub-section-header">
            <h2 className="tablescrub-section-title">See the transformation</h2>
            <p className="tablescrub-section-description">
              Customer data deduplication example
            </p>
          </div>
          
          <div className="tablescrub-demo-grid">
            <div className="tablescrub-demo-card">
              <div className="tablescrub-demo-card-header tablescrub-demo-before">
                <h4 className="tablescrub-demo-card-title">Before: Messy duplicates</h4>
              </div>
              <div className="tablescrub-demo-card-content">
                <div className="tablescrub-table">
                  <div className="tablescrub-table-header">
                    <div className="tablescrub-table-cell">Name</div>
                    <div className="tablescrub-table-cell">Email</div>
                    <div className="tablescrub-table-cell">Phone</div>
                  </div>
                  {beforeData.map((row, index) => (
                    <div key={index} className="tablescrub-table-row">
                      <div className="tablescrub-table-cell">{row.name}</div>
                      <div className="tablescrub-table-cell">{row.email}</div>
                      <div className="tablescrub-table-cell">{row.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="tablescrub-demo-card tablescrub-demo-after">
              <div className="tablescrub-demo-card-header">
                <h4 className="tablescrub-demo-card-title">After: Clean golden records</h4>
              </div>
              <div className="tablescrub-demo-card-content">
                <div className="tablescrub-table">
                  <div className="tablescrub-table-header">
                    <div className="tablescrub-table-cell">Name</div>
                    <div className="tablescrub-table-cell">Email</div>
                    <div className="tablescrub-table-cell">Phone</div>
                    <div className="tablescrub-table-cell">Confidence</div>
                  </div>
                  {afterData.map((row, index) => (
                    <div key={index} className="tablescrub-table-row">
                      <div className="tablescrub-table-cell">{row.name}</div>
                      <div className="tablescrub-table-cell">{row.email}</div>
                      <div className="tablescrub-table-cell">{row.phone}</div>
                      <div className="tablescrub-table-cell">
                        <span className={`tablescrub-confidence-badge ${
                          row.status === 'merged' ? 'tablescrub-confidence-merged' : 'tablescrub-confidence-unique'
                        }`}>
                          {row.confidence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="tablescrub-usecases">
        <div className="tablescrub-container">
          <div className="tablescrub-section-header">
            <h2 className="tablescrub-section-title">Use Cases</h2>
          </div>
          
          <div className="tablescrub-usecases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="tablescrub-usecase-card">
                <div className="tablescrub-usecase-header">
                  <div className="tablescrub-usecase-badge">
                    {useCase.industry}
                  </div>
                </div>
                <div className="tablescrub-usecase-content">
                  <h3 className="tablescrub-usecase-title">{useCase.title}</h3>
                  <p className="tablescrub-usecase-description">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tablescrub-cta">
        <div className="tablescrub-container">
          <div className="tablescrub-cta-content">
            <div className="tablescrub-cta-icon">📈</div>
            <h2 className="tablescrub-section-title">Ready to clean your data?</h2>
            <p className="tablescrub-section-description">
              Transform your messy datasets into analytics-ready golden records today.
            </p>
            <div className="tablescrub-cta-buttons">
              <button className="tablescrub-btn-primary tablescrub-pulse">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableScrubDetail;