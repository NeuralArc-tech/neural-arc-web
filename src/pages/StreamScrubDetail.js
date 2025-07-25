import React from 'react';
import './StreamScrubDetail.css';

function StreamScrubDetail({ onBack }) {
  const features = [
    {
      icon: "🛡️",
      title: "Schema Validation",
      description: "Validates Avro/Protobuf/JSON schemas with dead-letter handling"
    },
    {
      icon: "🔀",
      title: "Deduplication Windows", 
      description: "Exactly-once semantics with sliding/tumbling windows"
    },
    {
      icon: "⚡",
      title: "Real-time Enrichment",
      description: "Joins against Redis, Cassandra, HTTP microservices"
    },
    {
      icon: "📊",
      title: "Operational Visibility",
      description: "Prometheus metrics and Grafana dashboards"
    }
  ];

  return (
    <div className="streamscrub-detail-page">
      {/* Hero Section */}
      <section className="streamscrub-hero">
        <div className="streamscrub-container">
          <div className="streamscrub-hero-content">
            <div className="streamscrub-badge">
              StreamScrub Engine
            </div>
            
            <h1 className="streamscrub-hero-title">
              Real-time event{" "}
              <span className="streamscrub-highlight">purification</span>{" "}
              at scale
            </h1>
            
            <p className="streamscrub-hero-description">
              Process high-velocity streams with millisecond latency. Schema governance, 
              deduplication, and enrichment for Kafka, Kinesis, and Pulsar.
            </p>

            <div className="streamscrub-hero-buttons">
              <button className="streamscrub-btn-primary">
                Try Stream Scrub
              </button>
            </div>

            <div className="streamscrub-latency-badge">
              &lt; 10ms avg latency
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="streamscrub-features">
        <div className="streamscrub-container">
          <div className="streamscrub-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="streamscrub-feature-card">
                <div className="streamscrub-feature-header">
                  <div className="streamscrub-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="streamscrub-feature-title">{feature.title}</h3>
                </div>
                <div className="streamscrub-feature-content">
                  <p className="streamscrub-feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Performance Metrics */}
      <section className="streamscrub-metrics">
        <div className="streamscrub-container">
          <div className="streamscrub-section-header">
            <h2 className="streamscrub-section-title">Built for Performance</h2>
            <p className="streamscrub-section-description">
              Engineered for high-throughput stream processing with minimal overhead
            </p>
          </div>
          
          <div className="streamscrub-metrics-grid">
            <div className="streamscrub-metric-card">
              <div className="streamscrub-metric-value">Zero</div>
              <div className="streamscrub-metric-label">Data Loss</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="streamscrub-usecases">
        <div className="streamscrub-container">
          <div className="streamscrub-section-header">
            <h2 className="streamscrub-section-title">Stream Processing Excellence</h2>
            <p className="streamscrub-section-description">
              Trusted by teams for mission-critical event processing
            </p>
          </div>
          
          <div className="streamscrub-usecases-grid">
            <div className="streamscrub-usecase-card">
              <div className="streamscrub-usecase-header">
                <div className="streamscrub-usecase-badge">Financial</div>
                <h3 className="streamscrub-usecase-title">Real-time Fraud Detection</h3>
              </div>
              <div className="streamscrub-usecase-content">
                <p className="streamscrub-usecase-description">
                  Process payment events with sub-10ms latency for instant fraud scoring
                </p>
              </div>
            </div>
            
            <div className="streamscrub-usecase-card">
              <div className="streamscrub-usecase-header">
                <div className="streamscrub-usecase-badge">E-commerce</div>
                <h3 className="streamscrub-usecase-title">User Behavior Analytics</h3>
              </div>
              <div className="streamscrub-usecase-content">
                <p className="streamscrub-usecase-description">
                  Deduplicate clickstream data and enrich with user profiles in real-time
                </p>
              </div>
            </div>
            
            <div className="streamscrub-usecase-card">
              <div className="streamscrub-usecase-header">
                <div className="streamscrub-usecase-badge">IoT</div>
                <h3 className="streamscrub-usecase-title">Sensor Data Processing</h3>
              </div>
              <div className="streamscrub-usecase-content">
                <p className="streamscrub-usecase-description">
                  Validate sensor schemas and aggregate telemetry for anomaly detection
                </p>
              </div>
            </div>
            
            <div className="streamscrub-usecase-card">
              <div className="streamscrub-usecase-header">
                <div className="streamscrub-usecase-badge">Gaming</div>
                <h3 className="streamscrub-usecase-title">Player Event Streams</h3>
              </div>
              <div className="streamscrub-usecase-content">
                <p className="streamscrub-usecase-description">
                  Process millions of game events for leaderboards and matchmaking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="streamscrub-cta">
        <div className="streamscrub-container">
          <div className="streamscrub-cta-content">
            <h2 className="streamscrub-section-title">Ready for real-time processing?</h2>
            <p className="streamscrub-section-description">
              Start processing your event streams with millisecond precision today.
            </p>
            <div className="streamscrub-cta-buttons">
              <button className="streamscrub-btn-primary streamscrub-pulse">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StreamScrubDetail;