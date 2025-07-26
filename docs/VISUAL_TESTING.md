# Visual Testing with Browser-Use and MCP

This document provides a comprehensive guide to the visual testing infrastructure integrated with Gemini CLI.

## What is Gemini Visual Testing?

Gemini Visual Testing is an AI-powered system that automatically analyzes your website's visual design and responsive behavior when you mention `@gemini` with visual-related keywords in GitHub issues or pull requests.

### How It Works
When you comment `@gemini check mobile responsiveness`, the system:
1. **Detects visual keywords** in your comment
2. **Launches Browser-Use** - an AI agent that controls a real browser
3. **Captures screenshots** at multiple device sizes (desktop, tablet, mobile)
4. **AI analyzes** the visual design, layout, and responsive behavior
5. **Posts results** back to your GitHub issue/PR with specific recommendations

### Key Benefits
- ✅ **Instant visual feedback** - Get design analysis in minutes
- ✅ **Multi-device testing** - Automatically tests desktop, tablet, and mobile views
- ✅ **AI-powered insights** - Intelligent analysis with specific CSS recommendations
- ✅ **Zero setup required** - Just comment on GitHub, everything runs automatically
- ✅ **Screenshot evidence** - Visual proof of issues with downloadable artifacts

## Overview

Our visual testing setup combines:
- **Browser-Use**: AI-powered browser automation that acts like a human tester
- **MCP (Model Context Protocol)**: Standardized protocol for AI-tool communication
- **Playwright**: Cross-browser testing framework for precise browser control
- **Gemini CLI**: AI assistant that orchestrates the entire testing process

## Architecture

```mermaid
graph TD
    A[GitHub Issue/PR] -->|@gemini command| B[Gemini CLI Workflow]
    B --> C{Visual Test Request?}
    C -->|Yes| D[Browser-Use MCP Server]
    C -->|No| E[Standard Analysis]
    D --> F[Capture Screenshots]
    D --> G[AI Visual Analysis]
    F --> H[Generate Report]
    G --> H
    H --> I[Post Results to GitHub]
```

## Workflow Coordination: How gemini-cli.yml and visual-verification.yml Work Together

Our visual testing system uses **two complementary GitHub Actions workflows** that work together seamlessly:

### 🤖 **gemini-cli.yml** - Main AI Assistant Workflow

**Purpose**: Primary AI automation that handles all `@gemini` interactions

**Triggers**:
- Issues opened/edited
- Pull requests opened/synchronized/reopened
- Comments with `@gemini` mentions
- PR review comments with `@gemini`

**Visual Testing Integration**:
```yaml
# Detects visual keywords automatically
- name: Visual Testing with Browser-Use
  if: contains(github.event.comment.body, 'visual') || 
      contains(github.event.comment.body, 'responsive') ||
      contains(github.event.comment.body, 'mobile') # ... etc
```

**What it does for visual testing**:
- ✅ **Quick visual analysis** - Responds immediately to visual-related comments
- ✅ **3 standard screenshots** - Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- ✅ **AI-powered analysis** - Uses Browser-Use Agent for intelligent insights
- ✅ **Integrated responses** - Posts results directly in GitHub comments
- ✅ **7-day artifacts** - Screenshots saved as downloadable GitHub artifacts

### 🎨 **visual-verification.yml** - Dedicated Visual Testing Workflow

**Purpose**: Comprehensive, standalone visual testing with advanced options

**Triggers**:
- **Manual workflow dispatch** (Actions → Visual Verification → Run workflow)
- **Programmatic triggers** from other workflows or scripts

**Advanced Features**:
```yaml
# Customizable parameters
inputs:
  test_url: 'URL to test'
  viewport_sizes: 'Custom viewport dimensions'
  visual_test_type: 'full/regression/responsive/accessibility'
```

**What it does**:
- ✅ **Comprehensive testing** - Full visual regression and accessibility analysis
- ✅ **Custom viewports** - Test any device size combinations
- ✅ **30-day artifacts** - Longer retention for important tests
- ✅ **Detailed reporting** - In-depth analysis with testing checklists
- ✅ **CI/CD integration** - Can be triggered from deployment pipelines

### 🔄 **How They Communicate**

#### **Cross-Workflow Triggering**:
The Gemini CLI can trigger the visual verification workflow for complex testing:

```bash
# From gemini-cli.yml Custom Commands step:
gh workflow run visual-verification.yml -f test_url="https://example.com" -f visual_test_type="regression"
```

#### **Workflow Selection Logic**:

| **Use Case** | **Workflow** | **Why** |
|-------------|--------------|---------|
| `@gemini check mobile layout` | **gemini-cli.yml** | Quick feedback, integrated response |
| `@gemini run comprehensive visual audit` | **gemini-cli.yml** → triggers **visual-verification.yml** | Complex analysis needs |
| Pre-deployment testing | **visual-verification.yml** | Manual/CI trigger with custom parameters |
| Visual regression after code changes | **visual-verification.yml** | Baseline comparison needed |

#### **Communication Examples**:

**Scenario 1: Quick Check**
```
User: "@gemini the button looks weird on mobile"
↓
gemini-cli.yml detects "mobile" keyword
↓
Runs integrated Browser-Use visual testing
↓
Posts analysis + screenshots in 2-3 minutes
```

**Scenario 2: Comprehensive Analysis**
```
User: "@gemini run full visual verification with regression testing"
↓
gemini-cli.yml Custom Commands step
↓
Triggers visual-verification.yml with regression parameters
↓
Comprehensive testing with baseline comparison
↓
Results posted back to original issue with detailed artifacts
```

**Scenario 3: CI/CD Integration**
```
Code deployed to staging
↓
CI/CD pipeline triggers visual-verification.yml
↓
Automated visual regression testing
↓
Results posted to relevant PR or Slack notification
```

## Quick Start

### 1. Trigger Visual Testing via GitHub

Create an issue or comment with visual-related keywords:

```markdown
@gemini The mobile menu is overlapping with the logo on iPhone 12
```

```markdown
@gemini Check responsive design across all device sizes
```

### 2. Manual Workflow Trigger

Go to Actions → Visual Verification → Run workflow

Parameters:
- `test_url`: URL to test (defaults to production)
- `viewport_sizes`: Comma-separated viewport sizes
- `visual_test_type`: full, regression, responsive, or accessibility

### 3. Local Development

```bash
# Install dependencies
pip install -r requirements.txt
playwright install chromium

# Run visual test
python scripts/visual-test.py http://localhost:3000

# With custom viewports
python scripts/visual-test.py http://localhost:3000 "1920x1080,375x812"
```

## 📸 Screenshot Storage & Access Guide

Understanding where your screenshots are saved and how to access them is crucial for effective visual testing.

### 🎯 **Screenshot Locations by Trigger Method**

#### **Method 1: GitHub Comment Trigger** (`@gemini visual`)

**When you comment**: `@gemini check mobile responsiveness`

**Storage Location**: GitHub Actions Artifacts
- **Artifact Name**: `visual-screenshots-{run-id}` (e.g., `visual-screenshots-12345678`)
- **Retention**: 7 days (automatically deleted)
- **Format**: ZIP file containing PNG screenshots

**Screenshot Files**:
```
visual-screenshots-12345678.zip
├── desktop_1920x1080.png     # Desktop view
├── tablet_768x1024.png       # Tablet view  
└── mobile_375x667.png        # Mobile view
```

**How to Access**:
1. **Go to your repository** → Actions tab
2. **Find the workflow run** triggered by your comment
3. **Scroll to "Artifacts" section** at the bottom of the run page
4. **Click the artifact name** to download ZIP file
5. **Extract and view** the PNG files

#### **Method 2: Manual Workflow Trigger** (visual-verification.yml)

**When you trigger**: Actions → Visual Verification → Run workflow

**Storage Location**: GitHub Actions Artifacts (Enhanced)
- **Artifact Name**: `visual-screenshots-{run-id}` + `visual-report-{run-id}`
- **Retention**: 30 days (longer retention)
- **Format**: ZIP files with screenshots + detailed markdown report

**Files Include**:
```
visual-screenshots-12345678.zip
├── desktop_1920x1080.png
├── tablet_768x1024.png
├── mobile_375x667.png
└── [custom viewports if specified]

visual-report-12345678.zip
├── visual-report.md          # Detailed analysis
└── metadata.json             # Test configuration
```

#### **Method 3: Local Testing** (Docker or Python script)

**When you run**: `python scripts/visual-test.py`

**Storage Location**: Local filesystem
- **Directory**: `visual-test-results/screenshots/`
- **Retention**: Permanent (until you delete)
- **Format**: Direct PNG files + markdown report

**Local Directory Structure**:
```
your-project/
├── visual-test-results/
│   ├── screenshots/
│   │   ├── desktop_1920x1080.png
│   │   ├── tablet_768x1024.png
│   │   └── mobile_375x667.png
│   ├── visual-report.md
│   └── metadata.json
├── browser-recordings/        # Docker: Video recordings
├── browser-artifacts/         # Docker: Additional artifacts
└── screenshots/               # Playwright: Direct screenshots
```

### 🔗 **Step-by-Step Access Instructions**

#### **Accessing GitHub Actions Screenshots**:

1. **Navigate to your repository**
2. **Click "Actions" tab**
3. **Find the relevant workflow run**:
   - Look for "Gemini CLI Integration" (for @gemini comments)
   - Look for "Visual Verification" (for manual triggers)
4. **Click on the specific run**
5. **Scroll to bottom** → "Artifacts" section
6. **Download the ZIP file**
7. **Extract and view** PNG files

**Pro Tip**: Bookmark the workflow run URL immediately after triggering for quick access!

#### **Quick Access URLs**:
```
# Your repository's Actions page
https://github.com/{owner}/{repo}/actions

# Specific workflow runs
https://github.com/{owner}/{repo}/actions/runs/{run-id}

# Direct artifact download (requires authentication)
https://github.com/{owner}/{repo}/actions/runs/{run-id}/artifacts/{artifact-id}
```

### ⏰ **Retention Policies**

| **Method** | **Location** | **Retention** | **Access** |
|------------|-------------|---------------|------------|
| `@gemini` comments | GitHub Artifacts | 7 days | Download ZIP |
| Manual workflow | GitHub Artifacts | 30 days | Download ZIP |
| Local testing | Your machine | Permanent | Direct files |
| Docker testing | Your machine | Permanent | Direct files |

### 🚨 **Important Notes**

#### **Download Before Expiration**:
- GitHub automatically deletes artifacts after retention period
- **Download important screenshots within the retention window**
- Consider running tests locally for permanent storage

#### **Privacy & Access**:
- **Public repositories**: Anyone with repo access can download artifacts
- **Private repositories**: Only collaborators can access artifacts
- **No direct linking**: Screenshots aren't directly linkable URLs (GitHub security)

#### **File Sizes**:
- Screenshots are typically 50-500KB each
- Full-page screenshots can be larger (1-2MB)
- ZIP artifacts include all viewports tested

### 🔄 **Backup & Archiving Strategies**

#### **For Important Tests**:
```bash
# Automated backup script
#!/bin/bash
gh run list --workflow="visual-verification.yml" --limit=10 --json databaseId,conclusion,url > runs.json
# Download and archive important artifacts
```

#### **Local Development Workflow**:
```bash
# Always test locally first for permanent storage
python scripts/visual-test.py http://localhost:3000

# Then test production via GitHub for automated analysis
# Comment: @gemini verify production visual consistency
```

#### **CI/CD Integration**:
```yaml
# In your deployment workflow
- name: Archive Visual Test Results
  uses: actions/upload-artifact@v4
  with:
    name: production-visual-tests
    path: visual-test-results/
    retention-days: 90  # Longer retention for production tests
```

### 📱 **Mobile Access**

Screenshots can be viewed on mobile devices:
1. **Download ZIP** from GitHub on your phone
2. **Extract files** using mobile ZIP app
3. **View PNG files** in photos app
4. **Share with team** via messaging apps

### 🔍 **Troubleshooting Screenshot Access**

#### **"Artifact not found"**:
- Check if retention period expired
- Verify you have repository access permissions
- Ensure the workflow completed successfully

#### **"Empty ZIP file"**:
- Workflow may have failed during screenshot capture
- Check workflow logs for Browser-Use errors
- Try running the test locally to debug

#### **"Cannot download artifacts"**:
- Must be logged into GitHub
- Need repository access permissions
- Try downloading from different browser/device

## MCP Server Setup

### Browser-Use MCP Server

Provides AI-powered browser automation:

```json
{
  "browser-use": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "browser-use-mcp-server"],
    "env": {
      "BROWSER_USE_HEADLESS": "false",
      "BROWSER_USE_SAVE_VIDEOS": "true"
    }
  }
}
```

Features:
- Intelligent element detection
- Natural language task execution
- Video recording of interactions
- Artifact collection

### Playwright MCP Server

Provides precise browser control:

```json
{
  "playwright-mcp": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "@playwright/mcp", "start"]
  }
}
```

Features:
- Multi-browser support (Chrome, Firefox, Safari)
- Network interception
- Mobile device emulation
- Accessibility tree access

## Docker's Role in Visual Testing

Docker provides **isolated, pre-configured environments** for running visual testing tools locally. This is especially useful for development, debugging, and testing before pushing to GitHub.

### 🐳 **What Docker Does in This Project**

Docker runs **two specialized containers** that replicate the same browser automation environment used in GitHub Actions:

#### **1. Browser-Use MCP Container** (`browser-use-mcp`)
```yaml
# From docker-compose.yml
browser-use-mcp:
  image: ghcr.io/co-browser/browser-use-mcp-server:latest
  ports:
    - "5900:5900"    # VNC - Watch browser automation live!
    - "8765:8765"    # MCP communication port
  environment:
    - VNC_PASSWORD=gemini123
    - BROWSER_USE_SAVE_VIDEOS=true
    - BROWSER_USE_SAVE_ARTIFACTS=true
```

**What it provides**:
- ✅ **Visual debugging** - Watch the AI control the browser in real-time via VNC
- ✅ **Video recordings** - All browser interactions saved as MP4 files
- ✅ **Consistent environment** - Same browser versions as GitHub Actions
- ✅ **MCP server** - Enables Claude Desktop integration for local AI assistance

#### **2. Playwright MCP Container** (`playwright-mcp`)
```yaml
# Built from docker/playwright-mcp.Dockerfile
playwright-mcp:
  build:
    dockerfile: docker/playwright-mcp.Dockerfile
  ports:
    - "3001:3001"    # HTTP MCP server
  environment:
    - BROWSER_HEADLESS=false  # Show browser window
    - BROWSER_SLOWMO=100     # Slow down for debugging
```

**What it provides**:
- ✅ **Cross-browser testing** - Chrome, Firefox, Safari support
- ✅ **Precise control** - Network interception, mobile emulation
- ✅ **Local screenshots** - Saved directly to your machine
- ✅ **Development workflow** - Test changes before committing

### 🚀 **Docker Usage Scenarios**

#### **Scenario 1: Local Development & Debugging**
```bash
# Start the Docker stack
docker-compose up -d

# Open VNC to watch browser automation live
open vnc://localhost:5900  # Password: gemini123

# Run your visual tests locally
python scripts/visual-test.py http://localhost:3000

# Watch the AI navigate your site in real-time!
```

#### **Scenario 2: Reproduce GitHub Actions Issues**
```bash
# If GitHub Actions visual testing fails, debug locally:
docker-compose up -d

# Run the exact same test that failed in CI
python scripts/visual-test.py https://your-staging-url.com

# Check logs for detailed error information
docker-compose logs -f browser-use-mcp
```

#### **Scenario 3: Claude Desktop Integration**
```bash
# Copy MCP configuration to Claude Desktop
cp mcp-config.json ~/.claude/claude_desktop_config.json

# Start Docker MCP servers
docker-compose up -d

# Now Claude Desktop can use your local visual testing tools!
# Ask Claude: "Take a screenshot of my website and analyze the mobile layout"
```

### 📁 **File Storage with Docker**

Docker creates these directories on your local machine:
```
your-project/
├── browser-recordings/    # 📹 Video recordings of browser automation
├── browser-artifacts/     # 📊 Analysis reports and test results  
├── playwright-data/       # 🗄️ Playwright browser data and cache
└── screenshots/           # 📸 Screenshots from tests
```

### 🔧 **Docker Commands Reference**

```bash
# Start all services in background
docker-compose up -d

# Watch logs in real-time
docker-compose logs -f browser-use-mcp

# Restart a specific service
docker-compose restart playwright-mcp

# Stop all services
docker-compose down

# Rebuild containers (after changes)
docker-compose up -d --build

# View running containers
docker-compose ps

# Access container shell for debugging
docker-compose exec browser-use-mcp bash
```

### 🎯 **When to Use Docker vs GitHub Actions**

| **Use Docker when** | **Use GitHub Actions when** |
|---------------------|----------------------------|
| Developing visual tests | Production visual testing |
| Debugging test failures | Automated CI/CD testing |
| Testing local changes | Testing deployed websites |
| Learning how the system works | Responding to GitHub issues |
| Customizing browser settings | Standard workflow automation |

### ⚡ **Docker Benefits**

1. **Visual Debugging**: Watch AI control the browser via VNC
2. **Faster Feedback**: No waiting for GitHub Actions queue
3. **Consistent Environment**: Same setup as production testing
4. **Offline Development**: Work without internet connectivity
5. **Cost Efficiency**: No GitHub Actions minutes consumed
6. **Educational**: See exactly how Browser-Use works

## Docker Setup Commands

Run the complete visual testing stack:

```bash
# Start services
docker-compose up -d

# View browser via VNC (watch AI automation live!)
open vnc://localhost:5900  # Password: gemini123

# Check logs
docker-compose logs -f browser-use-mcp

# Stop services
docker-compose down
```

## Visual Test Types

### 1. Full Visual Analysis

Comprehensive analysis of the entire page:

```python
agent = Agent(
    task="Analyze complete visual hierarchy, responsive behavior, and accessibility"
)
```

Output includes:
- Layout consistency
- Typography scale
- Color harmony
- Spacing rhythm
- Interactive elements

### 2. Responsive Design Testing

Tests across multiple viewports:

```python
viewports = [
    {"name": "Desktop", "width": 1920, "height": 1080},
    {"name": "Tablet", "width": 768, "height": 1024},
    {"name": "Mobile", "width": 375, "height": 667}
]
```

Checks for:
- Layout breakpoints
- Text readability
- Touch target sizes
- Overflow issues
- Navigation usability

### 3. Visual Regression Testing

Compares against baseline screenshots:

```python
differences = await compare_screenshots(
    baseline_dir="baseline-screenshots",
    current_dir="screenshots",
    threshold=0.95
)
```

Detects:
- Unintended changes
- Layout shifts
- Style regressions
- Missing elements

### 4. Accessibility Testing

Validates WCAG compliance:

```python
agent = Agent(
    task="""
    Check:
    - Color contrast ratios (AA/AAA)
    - Focus indicators
    - Screen reader compatibility
    - Keyboard navigation
    """
)
```

## Report Format

Visual tests generate detailed reports:

```markdown
# Visual Testing Report

**URL**: https://example.com
**Timestamp**: 2024-01-15T10:30:00Z
**Viewports Tested**: 4

## Screenshots

### Desktop (1920x1080)
![Desktop](screenshots/desktop_1920x1080.png)

### Mobile (375x667)
![Mobile](screenshots/mobile_375x667.png)

## Visual Analysis

### ✅ Strengths
- Consistent brand colors
- Clear visual hierarchy
- Good contrast ratios

### ⚠️ Issues Found
1. **Mobile Navigation**: Menu items overflow on 375px width
   - CSS Fix: `nav { overflow-x: auto; }`
   
2. **Touch Targets**: Buttons too small on mobile
   - CSS Fix: `button { min-height: 44px; }`

## Recommendations
[Specific CSS improvements and best practices]
```

## Integration Examples

### GitHub Action Integration

```yaml
- name: Visual Testing on PR
  if: contains(github.event.comment.body, '@gemini visual')
  run: |
    python scripts/visual-test.py ${{ env.PREVIEW_URL }}
```

### CI/CD Pipeline

```yaml
visual-regression:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Setup Python
      uses: actions/setup-python@v5
    - name: Run Visual Tests
      run: |
        pip install -r requirements.txt
        python scripts/visual-test.py --regression
```

### Custom Analysis Tasks

```python
# Brand consistency check
agent = Agent(
    task="Verify brand colors, fonts, and spacing match design system"
)

# Performance analysis
agent = Agent(
    task="Identify render-blocking resources and layout shift causes"
)

# Competition analysis
agent = Agent(
    task="Compare our design with competitor sites for UX insights"
)
```

## Best Practices

### 1. Issue Reporting

Include specific details:
- Device/browser information
- Screenshots or screen recordings
- Steps to reproduce
- Expected vs actual behavior

### 2. Viewport Selection

Test critical breakpoints:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1366px (common laptop)
- Wide: 1920px (full HD)

### 3. Performance Considerations

- Run visual tests on staging first
- Cache baseline screenshots
- Limit full-page screenshots on mobile
- Use headless mode in CI

### 4. Accessibility Priority

Always check:
- Keyboard navigation
- Screen reader announcements
- Color contrast (4.5:1 for normal text)
- Focus indicators

## Troubleshooting

### Common Issues

1. **"Browser not found"**
   ```bash
   playwright install chromium
   ```

2. **"Connection refused" to MCP server**
   ```bash
   docker-compose restart browser-use-mcp
   ```

3. **Screenshots are blank**
   - Wait for page load: `wait_until="networkidle"`
   - Check for lazy-loaded content
   - Increase timeout values

4. **Different results locally vs CI**
   - Use consistent viewport sizes
   - Set explicit font rendering
   - Disable animations in tests

### Debug Mode

Enable verbose logging:

```bash
# Local debugging
DEBUG=browser-use:* python scripts/visual-test.py

# Docker debugging
docker-compose logs -f --tail=100
```

## Advanced Configuration

### Custom MCP Server

Create specialized visual testing server:

```javascript
// mcp-visual-server.js
import { Server } from '@modelcontextprotocol/sdk';

const server = new Server({
  name: 'visual-testing',
  version: '1.0.0',
});

server.setRequestHandler('screenshot', async (params) => {
  // Custom screenshot logic
});

server.setRequestHandler('analyze', async (params) => {
  // AI-powered analysis
});
```

### Browser-Use Extensions

Extend Browser-Use capabilities:

```python
from browser_use import Agent, Controller

class VisualController(Controller):
    async def check_animations(self):
        # Custom animation testing
        pass
    
    async def measure_performance(self):
        # Performance metrics collection
        pass

agent = Agent(controller=VisualController())
```

## Resources

- [Browser-Use Documentation](https://github.com/browser-use/browser-use)
- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [Playwright Documentation](https://playwright.dev)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Contributing

To improve visual testing:

1. Add test cases to `scripts/visual-test.py`
2. Extend viewport configurations
3. Create custom MCP tools
4. Submit PR with visual test results

## Future Enhancements

Planned improvements:
- [ ] Visual diff highlighting
- [ ] A/B testing support
- [ ] Performance budget tracking
- [ ] Design system validation
- [ ] Cross-browser comparison
- [ ] Animation testing
- [ ] Dark mode verification