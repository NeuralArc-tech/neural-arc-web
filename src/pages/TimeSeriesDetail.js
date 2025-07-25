import React, { useState } from 'react';
import './TimeSeriesDetail.css';

function TimeSeriesDetail({ onBack }) {
  const [activeMethod, setActiveMethod] = useState("linear");
  const [activeTab, setActiveTab] = useState("iot");

  const methodExplanations = {
    linear: "Draws a straight line between known values. Best for steady, gradual changes.",
    spline: "Creates smooth curves through data points. Ideal for natural phenomena with gentle transitions.",
    seasonal: "Detects repeating patterns (daily/weekly/yearly). Perfect for cyclical data like temperature or sales.",
    prophet: "Uses machine learning to predict missing values based on trends and patterns. Great for complex business metrics."
  };

  const capabilities = [
    {
      icon: "📈",
      title: "Gap Filling",
      description: "Context-aware interpolation using linear, spline, seasonal, or learned models",
      methods: ["Linear", "Spline", "Seasonal", "Prophet"]
    },
    {
      icon: "⚠️",
      title: "Outlier Detection", 
      description: "Statistical and ML methods to identify and remove anomalous readings",
      methods: ["Z-Score", "MAD", "Isolation Forest", "DBSCAN"]
    },
    {
      icon: "🕒",
      title: "Timezone Alignment",
      description: "Resamples and aligns multiple time zones for consistent analysis",
      methods: ["UTC", "Local", "Auto-detect", "Custom"]
    },
    {
      icon: "📊",
      title: "Drift Correction",
      description: "Corrects sensor clock skew and daylight saving shifts",
      methods: ["Auto", "Manual", "Monotonic", "Seasonal"]
    },
    {
      icon: "✅",
      title: "Quality Flags",
      description: "Each datapoint labeled as original, interpolated, adjusted, or removed",
      methods: ["Original", "Interpolated", "Adjusted", "Removed"]
    }
  ];

  const industries = [
    {
      id: "iot",
      name: "IoT",
      icon: "📡",
      useCase: "Sensor Gap Filling",
      description: "Fill gaps from offline sensors with intelligent interpolation",
      example: "Temperature sensors going offline for maintenance windows"
    },
    {
      id: "finance", 
      name: "Finance",
      icon: "💰",
      useCase: "Market Data Cleaning",
      description: "Remove flash crashes and align irregular trading timestamps",
      example: "Detecting and removing microsecond-level price anomalies"
    },
    {
      id: "energy",
      name: "Energy", 
      icon: "⚡",
      useCase: "Smart Meter Analytics",
      description: "Pattern analysis with seasonal awareness and anomaly detection",
      example: "Identifying AC malfunctions in consumption patterns"
    },
    {
      id: "devops",
      name: "DevOps",
      icon: "🖥️",
      useCase: "Metrics Processing",
      description: "Clean server metrics and detect performance anomalies",
      example: "CPU spike detection across distributed systems"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: "❤️",
      useCase: "Patient Monitoring",
      description: "Real-time patient data cleaning and alert validation",
      example: "Heart rate monitoring with sensor drift compensation"
    }
  ];

  const sampleData = {
    before: [
      { time: "00:00", temp: "22.5", humidity: "45", status: "original" },
      { time: "01:00", temp: "null", humidity: "null", status: "missing" },
      { time: "02:00", temp: "null", humidity: "null", status: "missing" },
      { time: "03:00", temp: "23.1", humidity: "47", status: "original" }
    ],
    after: {
      linear: [
        { time: "00:00", temp: "22.5", humidity: "45", status: "original" },
        { time: "01:00", temp: "22.7", humidity: "45.7", status: "interpolated" },
        { time: "02:00", temp: "22.9", humidity: "46.3", status: "interpolated" },
        { time: "03:00", temp: "23.1", humidity: "47", status: "original" }
      ],
      spline: [
        { time: "00:00", temp: "22.5", humidity: "45", status: "original" },
        { time: "01:00", temp: "22.6", humidity: "45.5", status: "interpolated" },
        { time: "02:00", temp: "22.95", humidity: "46.5", status: "interpolated" },
        { time: "03:00", temp: "23.1", humidity: "47", status: "original" }
      ],
      seasonal: [
        { time: "00:00", temp: "22.5", humidity: "45", status: "original" },
        { time: "01:00", temp: "22.8", humidity: "45.8", status: "interpolated" },
        { time: "02:00", temp: "23.0", humidity: "46.4", status: "interpolated" },
        { time: "03:00", temp: "23.1", humidity: "47", status: "original" }
      ],
      prophet: [
        { time: "00:00", temp: "22.5", humidity: "45", status: "original" },
        { time: "01:00", temp: "22.65", humidity: "45.6", status: "interpolated" },
        { time: "02:00", temp: "22.88", humidity: "46.2", status: "interpolated" },
        { time: "03:00", temp: "23.1", humidity: "47", status: "original" }
      ]
    }
  };

  const features = [
    {
      icon: "📈",
      title: "Seasonality Models",
      description: "Built-in STL and Prophet decomposition for periodic patterns"
    },
    {
      icon: "📊",
      title: "Multi-Series Checks",
      description: "Correlates related sensors to catch impossible readings"
    },
    {
      icon: "✅",
      title: "Quality Metadata",
      description: "Every point labeled with transformation history"
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Stream processing with millisecond-level latency"
    }
  ];

  return (
    <div className="timeseries-detail-page">
      {/* Hero Section */}
      <section className="timeseries-hero">
        <div className="timeseries-container">
          <div className="timeseries-hero-content">
            <div className="timeseries-badge">
              TimeSeriesScrub Engine
            </div>
            
            <h1 className="timeseries-hero-title">
              Heal gaps and anomalies in{" "}
              <span className="timeseries-highlight">time-critical</span>{" "}
              data
            </h1>
            
            <p className="timeseries-hero-description">
              Clean and align chronological measurements from IoT sensors, financial ticks, 
              and server metrics with context-aware algorithms.
            </p>

            <div className="timeseries-hero-buttons">
              <button className="timeseries-btn-primary">
                Try Timeseries Scrub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="timeseries-problem-section">
        <div className="timeseries-container">
          <div className="timeseries-problem-grid">
            <div className="timeseries-problem-content">
              <h2 className="timeseries-problem-title">
                Downtime = <span className="timeseries-highlight">blind spots</span>
              </h2>
              <p className="timeseries-problem-description">
                Time series data is only valuable when it's complete and accurate. 
                Gaps, anomalies, and drift make analysis unreliable and decisions risky.
              </p>
            </div>
            
            <div className="timeseries-problem-icon">
              <span className="timeseries-icon-large">⏱️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Carousel */}
      <section className="timeseries-capabilities">
        <div className="timeseries-container">
          <div className="timeseries-section-header">
            <h2 className="timeseries-section-title">Advanced Time Series Processing</h2>
            <p className="timeseries-section-description">
              Multiple algorithms for every type of temporal data challenge
            </p>
          </div>
          
          <div className="timeseries-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="timeseries-capability-card">
                <div className="timeseries-capability-header">
                  <div className="timeseries-capability-icon">
                    {capability.icon}
                  </div>
                  <h3 className="timeseries-capability-title">{capability.title}</h3>
                </div>
                <div className="timeseries-capability-content">
                  <p className="timeseries-capability-description">
                    {capability.description}
                  </p>
                  <div className="timeseries-capability-methods">
                    {capability.methods.map((method, i) => (
                      <span key={i} className="timeseries-method-badge">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="timeseries-playground">
        <div className="timeseries-container">
          <div className="timeseries-section-header">
            <h2 className="timeseries-section-title">Interactive Gap Filling Demo</h2>
            <p className="timeseries-section-description">
              See how different interpolation methods handle missing data
            </p>
          </div>
          
          <div className="timeseries-demo-grid">
            <div className="timeseries-demo-card">
              <div className="timeseries-demo-header">
                <h3 className="timeseries-demo-title timeseries-demo-title-error">Raw Data (with gaps)</h3>
              </div>
              <div className="timeseries-demo-content">
                <div className="timeseries-data-rows">
                  {sampleData.before.map((row, index) => (
                    <div 
                      key={index}
                      className={`timeseries-data-row ${
                        row.status === 'missing' ? 'timeseries-data-row-missing' : 'timeseries-data-row-normal'
                      }`}
                    >
                      <span className="timeseries-data-time">{row.time}</span>
                      <span className="timeseries-data-temp">{row.temp}</span>
                      <span className="timeseries-data-humidity">{row.humidity}</span>
                      <span className={`timeseries-status-badge ${
                        row.status === 'missing' ? 'timeseries-status-missing' : 'timeseries-status-original'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="timeseries-demo-card">
              <div className="timeseries-demo-header">
                <h3 className="timeseries-demo-title timeseries-demo-title-success">Cleaned Data (gaps filled)</h3>
              </div>
              <div className="timeseries-demo-content">
                <div className="timeseries-data-rows">
                  {sampleData.after[activeMethod].map((row, index) => (
                    <div 
                      key={index}
                      className={`timeseries-data-row ${
                        row.status === 'interpolated' ? 'timeseries-data-row-interpolated' : 'timeseries-data-row-normal'
                      }`}
                    >
                      <span className="timeseries-data-time">{row.time}</span>
                      <span className="timeseries-data-temp">{row.temp}</span>
                      <span className="timeseries-data-humidity">{row.humidity}</span>
                      <span className={`timeseries-status-badge ${
                        row.status === 'interpolated' ? 'timeseries-status-interpolated' : 'timeseries-status-original'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeseries-method-selector">
            <div className="timeseries-method-buttons">
              {["linear", "spline", "seasonal", "prophet"].map((method) => (
                <button
                  key={method}
                  onClick={() => setActiveMethod(method)}
                  className={`timeseries-method-btn ${
                    activeMethod === method ? 'timeseries-method-btn-active' : ''
                  }`}
                >
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </button>
              ))}
            </div>
            <div className="timeseries-method-explanation">
              <p>{methodExplanations[activeMethod]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="timeseries-industries">
        <div className="timeseries-container">
          <div className="timeseries-section-header">
            <h2 className="timeseries-section-title">Industry Applications</h2>
            <p className="timeseries-section-description">
              Specialized solutions for every vertical
            </p>
          </div>
          
          <div className="timeseries-tabs">
            <div className="timeseries-tab-list">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`timeseries-tab-trigger ${
                    activeTab === industry.id ? 'timeseries-tab-trigger-active' : ''
                  }`}
                >
                  <span className="timeseries-tab-icon">{industry.icon}</span>
                  <span className="timeseries-tab-name">{industry.name}</span>
                </button>
              ))}
            </div>
            
            <div className="timeseries-tab-content">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className={`timeseries-tab-panel ${
                    activeTab === industry.id ? 'timeseries-tab-panel-active' : ''
                  }`}
                >
                  <div className="timeseries-industry-card">
                    <div className="timeseries-industry-header">
                      <div className="timeseries-industry-icon-wrapper">
                        <span className="timeseries-industry-icon">{industry.icon}</span>
                      </div>
                      <div className="timeseries-industry-info">
                        <h3 className="timeseries-industry-title">{industry.useCase}</h3>
                        <p className="timeseries-industry-description">{industry.description}</p>
                      </div>
                    </div>
                    <div className="timeseries-industry-content">
                      <div className="timeseries-industry-example">
                        <p className="timeseries-example-label">Example use case:</p>
                        <p className="timeseries-example-text">{industry.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="timeseries-features">
        <div className="timeseries-container">
          <div className="timeseries-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="timeseries-feature-card">
                <div className="timeseries-feature-header">
                  <div className="timeseries-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="timeseries-feature-title">{feature.title}</h3>
                </div>
                <div className="timeseries-feature-content">
                  <p className="timeseries-feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="timeseries-cta">
        <div className="timeseries-container">
          <div className="timeseries-cta-content">
            <div className="timeseries-cta-icon">📊</div>
            <h2 className="timeseries-section-title">Ready to heal your time series?</h2>
            <p className="timeseries-section-description">
              Start cleaning chronological data with context-aware algorithms today.
            </p>
            <div className="timeseries-cta-buttons">
              <button className="timeseries-btn-primary timeseries-pulse">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimeSeriesDetail;