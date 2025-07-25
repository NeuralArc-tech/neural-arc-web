import React from 'react';
import './TextScrubDetail.css';

function TextScrubDetail({ onBack }) {

  const capabilities = [
    {
      icon: "🔄",
      title: "Fix Dates",
      description: "Corrects invalid dates like 2/31/2024 → 2/29/2024"
    },
    {
      icon: "🛡️",
      title: "Redact PII",
      description: "Masks sensitive information while preserving context"
    },
    {
      icon: "📄",
      title: "Standardize Terms",
      description: "Expands abbreviations and normalizes terminology"
    },
    {
      icon: "🌐",
      title: "Language Detection",
      description: "Identifies 100+ languages with dialect normalization"
    },
    {
      icon: "⚡",
      title: "Encoding Repair",
      description: "Fixes mojibake and invalid UTF-8 sequences"
    }
  ];

  const useCases = [
    {
      title: "LLM Training Data",
      description: "Clean web scrapes from HTML artifacts and inappropriate content",
      industry: "AI/ML"
    },
    {
      title: "Support Ticket Analysis",
      description: "Normalize formatting, fix typos, handle mixed languages",
      industry: "Customer Success"
    },
    {
      title: "Medical Records",
      description: "Standardize clinical notes with abbreviations and drug names",
      industry: "Healthcare"
    },
    {
      title: "Legal Document OCR",
      description: "Clean contracts from OCR errors and entity inconsistencies",
      industry: "Legal"
    }
  ];

  return (
    <div className="textscrub-detail-page">
      {/* Hero Section */}
      <section className="textscrub-hero">
        <div className="textscrub-container">
          <div className="textscrub-hero-content">
            <div className="textscrub-badge">
              TextScrub Engine
            </div>
            
            <h1 className="textscrub-hero-title">
              From messy text to{" "}
              <span className="textscrub-highlight">insight-ready</span>{" "}
              sentences.
            </h1>
            
            <p className="textscrub-hero-description">
              Transform unstructured documents, chat logs, and OCR dumps into linguistically 
              normalized, privacy-safe, analytics-ready text corpus.
            </p>

            <div className="textscrub-hero-buttons">
              <button className="textscrub-btn-primary">
                Try TextScrub →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Strip */}
      <section className="textscrub-problem-section">
        <div className="textscrub-container">
          <div className="textscrub-problem-grid">
            <div className="textscrub-problem-content">
              <h2 className="textscrub-problem-title">
                Stop fighting with <span className="textscrub-highlight">messy data</span>
              </h2>
              <p className="textscrub-problem-description">
                Raw text is filled with encoding errors, inconsistent formats, and privacy risks. 
                TextScrub automates the tedious cleaning tasks that dominate data-prep timelines.
              </p>
              <div className="textscrub-benefits">
                <div className="textscrub-benefit">
                  <span className="textscrub-check">✓</span>
                  <span>Reduces manual effort by 90%</span>
                </div>
                <div className="textscrub-benefit">
                  <span className="textscrub-check">✓</span>
                  <span>Increases downstream model accuracy</span>
                </div>
                <div className="textscrub-benefit">
                  <span className="textscrub-check">✓</span>
                  <span>Ensures HIPAA & GDPR compliance</span>
                </div>
              </div>
            </div>
            
            <div className="textscrub-example-card">
              <div className="textscrub-example-content">
                <div className="textscrub-example-section">
                  <div className="textscrub-example-label">Before:</div>
                  <div className="textscrub-example-before">
                    "mi cuenta no funciona... NEED HELP ASAP!!! order #12345"
                  </div>
                </div>
                <div className="textscrub-example-section">
                  <div className="textscrub-example-label">After:</div>
                  <div className="textscrub-example-after">
                    <pre>{`{
  "language": "es/en",
  "cleaned_text": "My account doesn't work. Need help as soon as possible.",
  "sentiment": "urgent_negative",
  "entities": {
    "ticket_id": "12345"
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="textscrub-capabilities">
        <div className="textscrub-container">
          <div className="textscrub-section-header">
            <h2 className="textscrub-section-title">Core Capabilities</h2>
            <p className="textscrub-section-description">
              Powered by state-of-the-art NLP and generative AI models
            </p>
          </div>
          
          <div className="textscrub-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="textscrub-capability-card">
                <div className="textscrub-capability-header">
                  <div className="textscrub-capability-icon">
                    {capability.icon}
                  </div>
                  <h3 className="textscrub-capability-title">{capability.title}</h3>
                </div>
                <div className="textscrub-capability-content">
                  <p className="textscrub-capability-description">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Use Cases */}
      <section className="textscrub-usecases">
        <div className="textscrub-container">
          <div className="textscrub-section-header">
            <h2 className="textscrub-section-title">Use Cases</h2>
            <p className="textscrub-section-description">
              Trusted by teams across industries
            </p>
          </div>
          
          <div className="textscrub-usecases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="textscrub-usecase-card">
                <div className="textscrub-usecase-header">
                  <div className="textscrub-usecase-badge">
                    {useCase.industry}
                  </div>
                  <h3 className="textscrub-usecase-title">{useCase.title}</h3>
                </div>
                <div className="textscrub-usecase-content">
                  <p className="textscrub-usecase-description">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="textscrub-compliance">
        <div className="textscrub-container">
          <div className="textscrub-compliance-content">
            <div className="textscrub-compliance-icon">🔒</div>
            <h2 className="textscrub-section-title">Enterprise-Grade Compliance</h2>
            <p className="textscrub-section-description">
              Built-in compliance with HIPAA, GDPR, PCI-DSS, and other regulations 
              via configurable PII detection and masking policies.
            </p>
            <div className="textscrub-compliance-badges">
              <span className="textscrub-compliance-badge">HIPAA</span>
              <span className="textscrub-compliance-badge">GDPR</span>
              <span className="textscrub-compliance-badge">PCI-DSS</span>
              <span className="textscrub-compliance-badge">SOC 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="textscrub-cta">
        <div className="textscrub-container">
          <div className="textscrub-cta-content">
            <h2 className="textscrub-section-title">Ready to clean your text data?</h2>
            <p className="textscrub-section-description">
              Start transforming your unstructured text into analytics-ready data today.
            </p>
            <div className="textscrub-cta-buttons">
              <button className="textscrub-btn-primary textscrub-pulse">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextScrubDetail;