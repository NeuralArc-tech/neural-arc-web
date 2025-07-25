# COMPANY DETAIL

**Neural Arc**

July, 2025  
Version 1.5

---

## TABLE OF CONTENT

- [TABLE OF CONTENT](#table-of-content)
- [VERSION CONTROL](#version-control)
- [COMPANY OVERVIEW](#company-overview)
- [ABOUT US](#about-us)
- [CURRENT PRODUCT LINE-UP](#current-product-line-up)
  - [DATA SCRUB ENGINE](#data-scrub-engine)
    - [TEXTSCRUB](#textscrub)
      - [Overview](#textscrub-overview)
      - [Target User](#textscrub-target-user)
      - [Core Capabilities](#textscrub-core-capabilities)
      - [Detailed Use Cases](#textscrub-detailed-use-cases)
      - [Advanced Features](#textscrub-advanced-features)
    - [TABLESCRUB](#tablescrub)
      - [Overview](#tablescrub-overview)
      - [Target User](#tablescrub-target-user)
      - [Core Capabilities](#tablescrub-core-capabilities)
      - [Detailed Use Cases](#tablescrub-detailed-use-cases)
      - [Advanced Features](#tablescrub-advanced-features)
    - [TIMESERIESSCRUB](#timeseriesscrub)
      - [Overview](#timeseriesscrub-overview)
      - [Target User](#timeseriesscrub-target-user)
      - [Core Capabilities](#timeseriesscrub-core-capabilities)
      - [Detailed Use Cases](#timeseriesscrub-detailed-use-cases)
      - [Advanced Features](#timeseriesscrub-advanced-features)
    - [STREAMSCRUB](#streamscrub)
      - [Overview](#streamscrub-overview)
      - [Target User](#streamscrub-target-user)
      - [Core Capabilities](#streamscrub-core-capabilities)
      - [Detailed Use Cases](#streamscrub-detailed-use-cases)
      - [Advanced Features](#streamscrub-advanced-features)
- [CUSTOMER WORKFLOW](#customer-workflow)
- [SECURITY COMPLIANCE](#security-compliance)

---

## VERSION CONTROL

| Version | Date | Author(s) | Notes |
|---------|------|-----------|-------|
| 1.0 | Feb 10, 2025 | Zaky Ashari | First Draft |
| 1.5 | July 14, 2025 | Zaky Ashari | Product Update |

---

## COMPANY OVERVIEW

**Neural Arc** is a B2B data-quality solutions provider dedicated to helping organizations unlock the full value of their information assets. Since November 2023, Neural Arc has focused on helping students complete their university and school assignments efficiently and in detail, proving our capability to support academic tasks with precision. In July 2025 we formalized a strategic alignment with our parent organization, **Lembaga Pendidikan & Pelatihan (LPP) Mitra Edukasi**—an Indonesian Ministry-recognized professional-training institute specializing in coding, AI, and community capacity-building. Operating under **Mitra Edukasi's** auspices gives **Neural Arc** expanded reach, reinforced governance, and shared values focused on up-skilling communities through technology.

Our mission remains to deliver reliable, ready-to-use data that accelerates insight and innovation, while our vision is a world where clean data is the default, not a luxury. By combining **Neural Arc's** cutting-edge data-engineering capabilities with Mitra Edukasi's nationwide educational network and compliance infrastructure, we provide clients with enterprise-grade solutions anchored in security, measurable outcomes, and social impact.

---

## ABOUT US

Founded by AI-engineering practitioner Zaky Ashari, **Neural Arc** lives by the tagline *"Bridging problems to intelligent, efficient solutions."*

In 2024, Zaky served as one of two AI Engineers on a large-scale fraud-detection initiative for one of Indonesia's biggest banking company—engineering a large transaction data, building an end-to-end processing pipeline, and developing a complete model-training workflow. This real-world, regulated-sector experience anchors **Neural Arc's** expertise in high-stakes environments. As the innovation arm of **LPP Mitra Edukasi**, we couple deep data-engineering expertise with **Mitra Edukasi's** educational, compliance, and support infrastructure—recognized by Indonesia's Directorate-General for Teachers & Education Personnel (Dirjen GTK) through SK No. 4806/C/HK.03.01/2025.

This partnership empowers us to offer 24/7 human-in-the-loop support, deliver complementary training alongside our products, and uphold a culture of customer empathy, engineering excellence, continuous learning, privacy by design, and success through partnership.

### Brief on LPP Mitra Edukasi

**LPP Mitra Edukasi** is an institute that designs and delivers coding, artificial-intelligence, and workforce-development programs for local governments, community enterprises, and the broader public. With certified instructors across 27 Indonesian districts and flagship boot-camps such as "KKA – Koding & Kecerdasan Artifisial" it champions inclusive digital transformation and lifelong learning.

---

## CURRENT PRODUCT LINE-UP
*(additional products coming soon)*

Below are the offerings available today. We iterate quickly, and new capabilities will be added over time.

## DATA SCRUB ENGINE

A modular platform that cleans, standardizes, and enriches data across multiple domains. It currently consists of four specialized services:

### TEXTSCRUB

#### <a id="textscrub-overview"></a>Overview

TextScrub ingests unstructured or semi-structured text (documents, chat logs, PDFs, OCR dumps) and returns a linguistically normalized, privacy-safe, and analytics-ready corpus. Built on state-of-the-art NLP and generative-AI models, the service:

- **Reduces manual effort** by automating repetitive cleaning and redaction tasks that often dominate data-prep timelines.
- **Increases downstream model accuracy** by standardizing terminology, fixing encoding errors, and removing noisy artifacts that confuse tokenizers and embeddings.
- **Enforces compliance** with HIPAA, GDPR, PCI-DSS, and other regulations via configurable PII detection-and-masking policies.
- **Provides auditability**—every transformation is logged with a before/after diff and the rationale, enabling rapid error tracing.

#### <a id="textscrub-target-user"></a>Target User

- NLP engineers preparing training datasets
- Customer-success teams analyzing support tickets
- Legal teams processing contracts
- Healthcare organizations handling clinical notes
- Trust & Safety or content-moderation teams

#### <a id="textscrub-core-capabilities"></a>Core Capabilities

```python
result = TextScrub.clean(
    text="Dr. Smith saw patient John Doe (SSN: 123-45-6789) on 2/31/2024",
    operations=[
        "fix_dates",           # 2/31/2024 → 2/29/2024 (leap-year correction)
        "redact_pii",          # John Doe → [PATIENT_NAME]; SSN masked
        "standardize_medical", # Dr. → Doctor; abbreviations expanded
        "detect_language",     # Identifies primary & secondary languages
        "fix_encoding"         # Repairs mojibake & invalid UTF-8 sequences
    ]
)
```

- **Adaptive pipeline**: Users can chain operations or supply custom plug-ins written in Python, spaCy, or HuggingFace.
- **Language auto-detection**: 100+ languages with dialect normalization (e.g., American vs. British English).
- **Domain packs**: Pre-trained models for medical, legal, finance, and e-commerce jargon.
- **Rich diffs & metadata**: Output can include change-history and entity-tags for each token, enabling traceability.

#### <a id="textscrub-detailed-use-cases"></a>Detailed Use Cases

1. **LLM training data preparation**
   - **Problem**: Raw web scrapes contain HTML artifacts, encoding issues, and inappropriate content
   - **Input**: `"Check out this &lt;b&gt;amazing&lt;/b&gt; product! 🔥🔥 Call 555-1234"`
   - **Output**: `"Check out this amazing product! Call [PHONE_REDACTED]"`

2. **Customer-support ticket analysis**
   - **Problem**: Tickets have inconsistent formatting, typos, mixed languages
   - **Input**: `"mi cuenta no funciona... NEED HELP ASAP!!! order #12345"`
   - **Output**: 
   ```json
   {
     "language": "es/en",
     "cleaned_text": "My account doesn't work. Need help as soon as possible.",
     "sentiment": "urgent_negative",
     "entities": {"order_id": "12345"}
   }
   ```

3. **Medical records standardization**
   - **Problem**: Clinical notes have abbreviations, drug misspellings, date inconsistencies
   - **Input**: `"Pt c/o chest pain x3d. Rx: assprin 81mg qd"`
   - **Output**: `"Patient complains of chest pain for 3 days. Prescription: aspirin 81mg once daily"`

4. **Legal document OCR cleanup**
   - **Problem**: Contracts have OCR errors, inconsistent entity references
   - **Input**: `"Agreement between ACME Corp (hereafter 'Comparty') and John 5mith"`
   - **Output**: `"Agreement between ACME Corp (hereafter 'Company') and John Smith"`

#### <a id="textscrub-advanced-features"></a>Advanced Features

- **Multi-language support**: 100+ languages with cultural normalization
- **Domain-specific models**: Medical, legal, financial terminology
- **PII detection levels**: Aggressive, balanced, minimal
- **Format preservation**: Maintain markdown, maintain structure
- **Explanation mode**: Why each change was made

### TABLESCRUB

#### <a id="tablescrub-overview"></a>Overview

TableScrub addresses quality issues in relational and spreadsheet-style datasets. Using fuzzy-matching, statistical validation, and machine-learning-based entity resolution, it:

- **Eliminates duplicates** even when key fields vary due to typos, casing, or format drift.
- **Normalizes formats** (addresses, phone numbers, currencies, dates) to enterprise standards so joins and roll-ups become trivial.
- **Validates business rules** in-flight, catching out-of-range or semantically impossible values before they hit production BI dashboards.
- **Learns over time**: Feedback loops let the model improve deduplication thresholds and validation heuristics based on real user decisions.

#### <a id="tablescrub-target-user"></a>Target User

- Data engineers maintaining data warehouses
- BI analysts preparing reports
- Finance teams reconciling records
- Sales-ops teams cleaning CRM data
- Academic & commercial researchers merging public datasets

#### <a id="tablescrub-core-capabilities"></a>Core Capabilities

```python
cleaned_df = TableScrub.clean(
    dataframe=customer_data,
    rules={
        "deduplication": {
            "keys": ["email", "phone"],
            "strategy": "fuzzy_match",  # configurable: exact, phonetic, ML
            "threshold": 0.85            # similarity threshold
        },
        "standardization": {
            "address": "usps_format",
            "phone": "e164",
            "currency": "usd"
        },
        "validation": {
            "email": "syntax_and_deliverability",  # MX lookup optional
            "age": "range(0, 150)"
        }
    }
)
```

- **Multi-algorithm deduplication**: Combines phonetic (Soundex), distance-based (Levenshtein, Jaro-Winkler), and BERT-based semantic similarity.
- **Schema-aware validators**: Built-in checks for IBAN, VAT, ISO-8601, USPS, custom regex, etc.
- **Merge-confidence scoring**: Each consolidated record carries a confidence score and a link back to original rows.
- **Point-in-time undo**: Every transformation can be rolled back to any save-point.

#### <a id="tablescrub-detailed-use-cases"></a>Detailed Use Cases

1. **Customer Data Deduplication**
   - **Problem**: Multiple entries for same customer with slight variations
   
   **Input**:
   | name | email | phone |
   |------|-------|-------|
   | John Smith | john@email.com | 555-123-4567 |
   | Smith, John | JOHN@EMAIL.COM | 5551234567 |
   | Jon Smith | john@gmail.com | 555.123.4567 |
   
   **Output**:
   | name | email | phone | merge_confidence |
   |------|-------|-------|------------------|
   | John Smith | john@email.com | +15551234567 | 0.92 |
   | John Smith | john@gmail.com | +15551234567 | singleton |

2. **Financial Data Reconciliation**
   - **Problem**: Inconsistent formats, currency mixing, rounding errors
   
   **Input**:
   | transaction_date | amount | currency | description |
   |------------------|--------|----------|-------------|
   | 1/2/23 | $1,234.56 | USD | Payment from ACME |
   | 02-01-2023 | 1234.560 | dollars | ACME payment |
   | 2023/01/02 | €1,234.56 | EUR | Payment form Acme |
   
   **Output**:
   | transaction_date | amount_usd | original_currency | normalized_description | potential_duplicate |
   |------------------|------------|-------------------|------------------------|-------------------|
   | 2023-01-02 | 1234.56 | USD | payment from acme | group_1 |
   | 2023-01-02 | 1234.56 | USD | payment from acme | group_1 |
   | 2023-01-02 | 1234.56 | EUR | payment from acme | unique |

3. **Product Catalog Standardization**
   - **Problem**: SKUs with variations, inconsistent units, missing categories
   
   **Input**:
   | sku | name | size | category |
   |-----|------|------|----------|
   | ABC-123 | Widget Blue Large | L | null |
   | ABC123 | lue Widget (Large) | large | large |
   | abc_123 | WIDGET - BLUE - LG | LG | widgets |
   
   **Output**:
   | sku | name | size | category | confidence |
   |-----|------|------|----------|------------|
   | ABC-123 | Widget Blue Large | L | widgets | 0.95 |

#### <a id="tablescrub-advanced-features"></a>Advanced Features

- **Fuzzy matching algorithms**: Soundex, Levenshtein, Jaro-Winkler
- **ML-based entity resolution**: Learn from user feedback
- **Hierarchical deduplication**: Account for parent-child relationships
- **Audit trail**: Every merge decision explained
- **Undo capability**: Reverse any cleaning operation

### TIMESERIESSCRUB

#### <a id="timeseriesscrub-overview"></a>Overview

TimeSeriesScrub cleans and aligns chronological measurements where timing is critical (IoT sensors, financial ticks, server metrics). The engine:

- **Detects and fills gaps** using context-aware interpolation (linear, spline, seasonal, or learned models).
- **Removes anomalies** via statistical methods (z-score, MAD) and unsupervised ML (Isolation Forest, DBSCAN).
- **Resamples & aligns timezones** so multi-source series can be merged without edge-effects.
- **Corrects drift** from sensor clock skew or daylight-saving shifts, maintaining a single canonical timeline.

#### <a id="timeseriesscrub-target-user"></a>Target User

- IoT engineers managing sensor networks
- Quantitative analysts cleaning market data
- DevOps & SRE teams processing metrics
- Energy companies with smart-meter data
- Healthcare teams monitoring patients in real time

#### <a id="timeseriesscrub-core-capabilities"></a>Core Capabilities

```python
cleaned_series = TimeSeriesScrub.clean(
    timeseries=sensor_data,
    operations={
        "gap_filling": "linear_interpolation",     # choice: linear, spline, KNN, prophet
        "outlier_detection": "isolation_forest",   # auto-tunes contamination parameter
        "resampling": "1H",                        # down/up-sample to uniform cadence
        "timezone_alignment": "UTC",               # converts & annotates original tz
        "drift_correction": "auto"                 # detects monotonic drift & adjusts
    }
)
```

- **Quality flags**: Each datapoint is labeled as original, interpolated, adjusted, or removed.
- **Seasonality models**: Built-in decomposition (STL, Prophet) to treat periodic patterns properly when filling gaps.
- **Multi-series sanity checks**: Correlates related sensors to catch physically impossible readings (e.g., negative energy usage).
- **Explainability API**: Returns JSON detailing why a point was flagged/outlier and the statistical evidence.

#### <a id="timeseriesscrub-detailed-use-cases"></a>Detailed Use Cases

1. **IoT Sensor Gap Filling**
   - **Problem**: Sensors go offline, creating gaps in critical data
   
   **Input**:
   | timestamp | temperature | humidity |
   |-----------|-------------|----------|
   | 2024-01-01 00:00 | 22.5 | 45 |
   | 2024-01-01 01:00 | null | null |
   | 2024-01-01 02:00 | null | null |
   | 2024-01-01 03:00 | 23.1 | 47 |
   
   **Output**:
   | timestamp | temperature | humidity | quality_flag |
   |-----------|-------------|----------|--------------|
   | 2024-01-01 00:00 | 22.5 | 45 | original |
   | 2024-01-01 01:00 | 22.7 | 45.7 | interpolated |
   | 2024-01-01 02:00 | 22.9 | 46.3 | interpolated |
   | 2024-01-01 03:00 | 23.1 | 47 | original |

2. **Financial Market Data Cleaning**
   - **Problem**: Irregular timestamps, outlier trades, market hours alignment
   
   **Input**:
   | timestamp | price | volume |
   |-----------|-------|---------|
   | 2024-01-01 09:30:00.1 | 100.50 | 1000 |
   | 2024-01-01 09:30:00.2 | 1.50 | 10 | ← Flash Crash
   | 2024-01-01 09:30:00.3 | 100.52 | 2000 |
   
   **Output**:
   | timestamp | price | volume | anomaly_score |
   |-----------|-------|---------|---------------|
   | 2024-01-01 09:30:00 | 100.50 | 1000 | 0.1 |
   | 2024-01-01 09:30:00 | 100.52 | 2000 | 0.1 |
   
   *\* Outlier removed with explanation logged*

3. **Energy Consumption Pattern Analysis**
   - **Problem**: Clock drift, seasonal patterns, anomalous readings
   
   **Input**:
   | timestamp | consumption_kwh | temperature |
   |-----------|-----------------|-------------|
   | 2024-07-01 00:00 | 2.5 | 25 |
   | 2024-07-01 01:00 | 2.3 | 24 |
   | 2024-07-01 02:00 | 85.7 | 24 | ← AC Malfunction
   
   **Output**:
   | timestamp | consumption_kwh | temperature | anomaly_type |
   |-----------|-----------------|-------------|--------------|
   | 2024-07-01 00:00 | 2.5 | 25 | normal |
   | 2024-07-01 01:00 | 2.3 | 24 | normal |
   | 2024-07-01 02:00 | 2.1 | 24 | Spike removed |

#### <a id="timeseriesscrub-advanced-features"></a>Advanced Features

- **Intelligent gap filling**: Linear, spline, seasonal-aware, forward-fill
- **Anomaly detection**: Statistical, ML-based, domain-specific
- **Seasonality handling**: Daily, weekly, monthly, yearly patterns
- **Clock drift correction**: Automatic detection and alignment
- **Multi-sensor correlation**: Validate readings across related sensors

### STREAMSCRUB

#### <a id="streamscrub-overview"></a>Overview

StreamScrub operates on high-velocity event streams (Kafka, Kinesis, Pulsar) with millisecond-level latency budgets. Key benefits include:

- **Schema governance in motion**: Validates Avro/Protobuf/JSON schemas as messages arrive, sending malformed events to dead-letter topics.
- **Deduplication windows**: Guarantees exactly-once semantics by collapsing duplicates within sliding or tumbling windows.
- **Real-time enrichment**: Joins against Redis, Cassandra, or HTTP micro-services to augment events before they feed ML features or fraud rules.
- **Operational visibility**: Emits Prometheus metrics and Grafana dashboards for throughput, error-rate, and lag.

#### <a id="streamscrub-target-user"></a>Target User

- Platform engineers building event pipelines
- Security teams processing logs
- Ad-tech companies analyzing clickstream
- Gaming studios tracking player events
- Financial firms screening transaction streams

#### <a id="streamscrub-core-capabilities"></a>Core Capabilities

```python
stream_config = StreamScrub.configure(
    source="kafka://events",
    operations=[
        {
            "type": "schema_validation",
            "schema": "avro://schemas/user_event_v2",
            "on_failure": "dead_letter"
        },
        {
            "type": "deduplication",
            "window": "5m",  # sliding window length
            "key": ["user_id", "event_id"]
        },
        {
            "type": "enrichment",
            "lookup": "user_profiles",
            "cache_ttl": "1h"  # in-memory cache for speed
        }
    ],
    sink="kafka://cleaned_events"
)
```

- **Watermarking & out-of-order handling**: Uses event-time semantics so late data is still incorporated correctly.
- **Dynamic schema evolution**: Supports backward/forward-compatible changes with zero downtime.
- **Circuit breakers & rate limiting**: Automatically throttles or bypasses enrichment calls on upstream failure to keep the stream flowing.
- **GUI & API configuration**: Pipelines can be defined via YAML, REST, or a drag-and-drop interface.

#### <a id="streamscrub-detailed-use-cases"></a>Detailed Use Cases

1. **Clickstream Deduplication**
   - **Problem**: Duplicate events from retries, double-clicks
   
   **Input Stream**:
   ```json
   {"user_id": "123", "event": "click", "timestamp": "2024-01-01T10:00:00", "button": "buy"}
   {"user_id": "123", "event": "click", "timestamp": "2024-01-01T10:00:00", "button": "buy"}
   {"user_id": "123", "event": "click", "timestamp": "2024-01-01T10:00:01", "button": "buy"}
   ```
   
   **Output Stream**:
   ```json
   {"user_id": "123", "event": "click", "timestamp": "2024-01-01T10:00:00", "button": "buy", "duplicate_count": 2}
   ```

2. **Log Aggregation and Normalization**
   - **Problem**: Multiple log formats, missing fields, different timestamp formats
   
   **Input Stream**:
   ```json
   {"level": "ERROR", "msg": "Connection failed", "ts": "1704110400"}
   {"severity": "error", "message": "Connection failed", "timestamp": "2024-01-01 10:00:00"}
   [ERROR] 2024/01/01 10:00:00 Connection failed
   ```
   
   **Output Stream**:
   ```json
   {
     "level": "ERROR",
     "message": "Connection failed",
     "timestamp": "2024-01-01 10:00:00",
     "source_format": "mixed",
     "normalized": true
   }
   ```

3. **Real-time Fraud Detection Preprocessing**
   - **Problem**: Incomplete events, need enrichment for ML models
   
   **Input Stream**:
   ```json
   {"transaction_id": "txn_123", "amount": 500, "merchant": "AMZN"}
   ```
   
   **Output Stream**:
   ```json
   {
     "transaction_id": "txn_123",
     "amount": 500,
     "merchant": "AMZN",
     "merchant_category": "E-commerce",
     "user_avg_transaction": 125.50,
     "merchant_risk_score": 0.2,
     "enrichment_latency_ms": 12
   }
   ```

#### <a id="streamscrub-advanced-features"></a>Advanced Features

- **Exactly-once processing**: State management, idempotent operations
- **Dynamic schema evolution**: Handle schema changes without downtime
- **Watermarking**: Handle late-arriving data
- **Circuit breakers**: Protect downstream systems
- **Real-time quality metrics**: Dashboard for stream health

---

## CUSTOMER WORKFLOW

1. **Discovery Call** – We discuss data pain-points, success criteria, and security requirements.

2. **Sample Audit** – You share a representative data slice under NDA; we run a no-cost health check and estimate ROI.

3. **Proposal & SLA** – Jointly define scope, metrics, and support levels; sign Master Service Agreement.

4. **On-Boarding** – Our solutions engineer connects to your sources (S3, Redshift, Kafka, etc.) and configures cleaning rules or APIs.

5. **Run & Review** – Jobs run in batch, streaming, or hybrid modes with dashboards exposing quality KPIs.

6. **Continuous Improvement** – Monthly health reviews, rule tuning, feature rollouts; 24/7 support answers questions in minutes, not days.

---

## SECURITY COMPLIANCE

**Neural Arc** recognises that robust information security is foundational to customer trust and business resilience. The following commitments outline how we embed ISO/IEC 27001 discipline into every engagement:

1. **Project-specific ISMS** – Neural Arc will build and maintain an Information Security Management System (ISMS) for every project, aligning with ISO/IEC 27001:2022 Clauses 4-10 and Annex A.

2. **Intentional & disciplined execution** – Each engagement is managed with clear governance, defined roles, and PDCA-driven continuous-improvement cycles, ensuring that security controls are implemented deliberately and operate effectively.

3. **Evidence-based assurance** – We substantiate compliance through comprehensive documentation, quantitative security metrics, and tamper-proof audit trails, ready for customer review or independent audit.

---

© Neural Arc 2025