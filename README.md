# Neural Arc Website

> Bridging problems to intelligent, efficient solutions.

## Overview

The official website for Neural Arc - an interactive, modern single-page application built with React featuring immersive 3D animations and particle effects. This repository showcases not only our brand identity but also serves as a demonstration of cutting-edge AI-powered development practices with automated visual testing and intelligent issue resolution.

> ⚠️ **Development Status**: This website is currently under active development. Features and content are being continuously improved and expanded. The AI-powered development infrastructure is fully operational for testing and development purposes.

## 🤖 AI-Powered Development Features

This repository demonstrates advanced AI integration for modern development workflows:

### **Gemini CLI Integration**
- **Automated Issue Triage**: AI analyzes and categorizes GitHub issues automatically
- **Pull Request Reviews**: Intelligent code review with security and performance analysis  
- **Visual Testing**: AI-powered responsive design testing across multiple devices
- **Smart Commands**: Natural language commands via `@gemini` mentions

### **Browser-Use Visual Testing**
- **Automated Screenshots**: Captures website visuals at desktop, tablet, and mobile viewports
- **AI Visual Analysis**: Intelligent analysis of layout, responsive design, and accessibility
- **Visual Regression Testing**: Automated comparison against baseline screenshots
- **Real-time Debugging**: VNC-enabled visual debugging with Docker integration

### **Example AI Commands**
```bash
# Comment in any GitHub issue or PR:
@gemini check mobile responsiveness
@gemini analyze the navigation layout on tablet
@gemini run visual verification with accessibility audit
@gemini the hero section overlaps on iPhone
```

## Features

- **Interactive 3D Animations**: Custom WebGL particle systems and Three.js integrations
- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Smooth Animations**: GSAP and Framer Motion powered transitions
- **Modern UI/UX**: Glass morphism design with elegant visual effects
- **Performance Optimized**: Efficient rendering and animation systems

## Technology Stack

### **Frontend Application**
- **Frontend**: React 19.1.0
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: GSAP, Framer Motion
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: React Scripts
- **Testing**: Jest, React Testing Library

### **AI & Automation Infrastructure**
- **AI Platform**: Google Gemini API for intelligent analysis
- **Browser Automation**: Browser-Use + Playwright for visual testing
- **Protocol**: MCP (Model Context Protocol) for AI-tool communication
- **Containerization**: Docker for isolated testing environments
- **CI/CD**: GitHub Actions with AI-powered workflows
- **Visual Testing**: Automated screenshot capture and analysis

## Project Structure

```
.
├── src/                          # React application source
│   ├── App.js                   # Main application component
│   ├── App.css                 # Global styles and animations
│   ├── ParticleCanvas.js       # WebGL particle system
│   ├── ScrollReveal.js         # Text reveal animations
│   ├── ScrollIndicator.js      # Page scroll indicator
│   ├── FadeOutOverlay.js       # Transition overlays
│   ├── Orb.js                  # Interactive 3D orb component
│   └── ProductParticleFlow.js  # Product section animations
│
├── .github/workflows/           # AI-powered automation
│   ├── gemini-cli.yml          # Main Gemini CLI integration
│   └── visual-verification.yml # Dedicated visual testing
│
├── scripts/                     # Visual testing tools
│   └── visual-test.py          # Browser-Use testing script
│
├── docs/                        # Documentation
│   └── VISUAL_TESTING.md       # Comprehensive visual testing guide
│
├── docker-compose.yml           # Local development environment
├── docker/                     # Docker configurations
├── mcp-config.json             # MCP server configuration
├── GEMINI.md                   # Gemini CLI configuration
├── requirements.txt            # Python dependencies
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Python 3.8+** (for visual testing)
- **Docker** (optional, for local visual testing environment)

### Installation

1. **Clone the repository:**
```bash
git clone git@github.com:NeuralArc-tech/neural-arc-web.git
cd neural-arc-web
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Create .env file with your API key
echo "GEMINI_API_KEY=your-gemini-api-key" > .env
```

4. **Start the development server:**
```bash
npm start
```

5. **Open your browser and navigate to `http://localhost:3000`**

### 🎯 Quick Start with AI Features

#### **Test Visual Design with AI:**
```bash
# Install visual testing dependencies
pip install -r requirements.txt
playwright install chromium

# Run AI-powered visual analysis
python scripts/visual-test.py http://localhost:3000
```

#### **Start Visual Testing Environment:**
```bash
# Start Docker-based testing environment
docker-compose up -d

# View browser automation live via VNC
open vnc://localhost:5900  # Password: gemini123
```

#### **Use AI Commands in GitHub:**
1. Create an issue or comment in any PR
2. Mention `@gemini` with visual keywords:
   - `@gemini check mobile responsiveness`
   - `@gemini analyze the hero section layout`
   - `@gemini test accessibility and color contrast`

### Available Scripts

#### **Frontend Development**
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

#### **Visual Testing**
- `python scripts/visual-test.py [URL]` - Run visual analysis
- `docker-compose up -d` - Start visual testing environment
- `docker-compose logs -f browser-use-mcp` - View testing logs

## 📚 Documentation

- **[GEMINI.md](./GEMINI.md)** - Gemini CLI configuration and quick reference
- **[Visual Testing Guide](./docs/VISUAL_TESTING.md)** - Comprehensive visual testing documentation
- **[MCP Configuration](./mcp-config.json)** - Model Context Protocol server setup

## 🎨 Visual Testing Features

### **Automated Visual Analysis**
- **Multi-viewport testing**: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- **AI-powered insights**: Layout analysis, responsive design validation, accessibility checks
- **Screenshot artifacts**: 7-day retention on GitHub Actions, permanent local storage
- **Real-time debugging**: VNC access to watch browser automation live

### **Visual Test Types**
- **Responsive Design Testing**: Layout consistency across devices
- **Visual Regression Testing**: Compare against baseline screenshots  
- **Accessibility Auditing**: WCAG compliance and color contrast analysis
- **Performance Analysis**: Layout shift detection and optimization suggestions

### **Access Your Screenshots**
1. **GitHub Actions**: Repository → Actions → Workflow Run → Artifacts section
2. **Local Testing**: `visual-test-results/screenshots/` directory
3. **Docker Environment**: `browser-recordings/` and `browser-artifacts/` directories

## 🚀 AI-Powered Workflow Examples

### **Issue Triage**
When you create an issue, AI automatically:
- Analyzes and categorizes the issue
- Applies appropriate labels (priority, difficulty, type)
- Suggests implementation approaches
- Can implement simple fixes immediately

### **Visual Bug Reports**
```bash
# Comment in an issue:
@gemini The navigation menu overlaps the logo on iPhone 12

# AI will:
# 1. Capture screenshots of the mobile layout
# 2. Analyze the overlap issue
# 3. Provide specific CSS fixes
# 4. Post results with visual evidence
```

### **Pull Request Enhancement**
```bash
# Comment in a PR:
@gemini Check if this layout change breaks mobile responsiveness

# AI will:
# 1. Test the PR preview across device sizes
# 2. Compare with baseline screenshots
# 3. Identify any responsive design issues
# 4. Suggest improvements
```

## Development Status

✨ **Advanced AI-Powered Development Environment** ✨

This repository demonstrates cutting-edge AI integration in web development:

### **Current Features**
- ✅ AI-powered issue triage and code review
- ✅ Automated visual testing across multiple devices
- ✅ Intelligent responsive design analysis
- ✅ Real-time browser automation debugging
- ✅ Visual regression testing capabilities

### **Active Development**
- 🔄 Product showcase pages with AI-generated content
- 🔄 Enhanced interactive elements with visual testing
- 🔄 Advanced accessibility auditing features
- 🔄 Performance monitoring integration

## Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅

*Visual testing supported on all browsers via Playwright automation*

## Contributing

This repository serves as a demonstration of AI-powered development practices. For questions about the AI integration, visual testing setup, or development workflows:

- **Create an issue** and use `@gemini` commands for AI assistance
- **Review documentation** in `docs/VISUAL_TESTING.md`
- **Check configuration** in `GEMINI.md` for available commands

## 👨‍💻 Credits & Development

This project represents a collaboration between human creativity and AI innovation:

### **Project Leadership**
**[Zaky Ashari](https://github.com/zashari)**
- Project architecture and vision
- AI integration strategy and implementation
- Frontend development and 3D animations
- Development workflow optimization

### **AI Collaboration Partners**
- **[Claude Code](https://claude.ai/code)** - Advanced code generation, visual testing integration, and documentation
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** - Intelligent issue triage, automated code review, and visual analysis
- **[GPT Codex](https://openai.com/codex)** - Code assistance and development acceleration

### **Technology Integration**
This project demonstrates the powerful synergy between human engineering leadership and AI-powered development tools, showcasing how modern web development can leverage artificial intelligence for enhanced productivity, quality assurance, and innovative user experiences.

> *"The future of software development lies in the seamless collaboration between human creativity and artificial intelligence."* - Zaky Ashari

## Copyright

© 2025 Neural Arc. All rights reserved.

---

**Neural Arc** - *Bridging problems to intelligent, efficient solutions.*