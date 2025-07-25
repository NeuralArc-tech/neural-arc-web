# Neural Arc Project Context for Gemini AI

## Project Overview
Neural Arc is a React.js website showcasing data processing and visualization products. The site features modern 3D animations, particle effects, and interactive product demonstrations.

## Technology Stack
- **Frontend Framework**: React 19.1.0
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/postprocessing
- **Animation**: Framer Motion, GSAP
- **Graphics Library**: OGL (WebGL library)
- **Build Tool**: Create React App (react-scripts)
- **Testing**: Jest, React Testing Library

## Project Structure
```
src/
├── App.js                    # Main application component
├── pages/                    # Product detail pages
│   ├── StreamScrubDetail.js  # Stream processing product
│   ├── TableScrubDetail.js   # Table data product
│   ├── TextScrubDetail.js    # Text processing product
│   └── TimeSeriesDetail.js   # Time series product
├── components/
│   ├── Orb.js               # 3D orb component
│   ├── ParticleCanvas.js    # Particle effect system
│   ├── PixelTransition.js   # Hover transition effects
│   ├── ProductParticleFlow.js # Product page particles
│   ├── ScrollIndicator.js   # Page scroll indicator
│   ├── ScrollReveal.js      # Scroll-based animations
│   └── FadeOutOverlay.js    # Page transition overlay
└── styles/
    ├── App.css
    ├── ProductDetails.css
    └── [component].css files
```

## Products
1. **StreamScrub** - Real-time data stream processing
2. **TableScrub** - Tabular data cleaning and processing
3. **TextScrub** - Natural language text processing
4. **TimeSeriesScrub** - Time series data analysis

## Code Conventions
- Use functional components with React hooks
- Follow React best practices and performance patterns
- Implement responsive design for all screen sizes
- Use CSS modules or styled-components for component styling
- Optimize 3D animations for performance
- Handle WebGL compatibility and fallbacks

## Common Tasks
- Adding new product pages following existing patterns
- Implementing 3D effects and animations
- Optimizing performance for mobile devices
- Ensuring accessibility compliance
- Testing across different browsers

## Development Guidelines
- Test all changes on multiple screen sizes
- Verify 3D effects work on various graphics capabilities
- Maintain consistent styling and animation timing
- Follow semantic HTML structure
- Implement proper error boundaries for 3D components

## Security Considerations
- No sensitive data or API keys in frontend code
- Validate all user inputs if any forms are added
- Use HTTPS for all external resources
- Implement proper Content Security Policy

## Issue Labels
- `bug` - Software defects or unexpected behavior
- `enhancement` - New features or improvements
- `documentation` - Documentation updates
- `question` - General questions or clarifications
- `good first issue` - Beginner-friendly tasks
- `help wanted` - Issues needing community help
- `priority-high/medium/low` - Issue priority levels
- `frontend` - Frontend-specific issues
- `design` - UI/UX related issues
- `performance` - Performance optimization
- `security` - Security-related concerns