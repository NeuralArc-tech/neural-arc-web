# GEMINI Configuration

This document contains configuration and instructions for the Gemini CLI bot integration in this repository.

## Visual Testing Capabilities

Gemini now has integrated Browser-Use and MCP (Model Context Protocol) for advanced visual testing and browser automation.

### Available Commands

When creating issues or commenting with `@gemini`, you can request visual testing:

#### Basic Visual Test
```
@gemini check the website visual design and responsive layout
```

#### Specific Viewport Testing
```
@gemini test mobile responsiveness on iPhone and tablet sizes
```

#### Visual Regression Testing
```
@gemini compare current design with baseline screenshots
```

#### Accessibility Testing
```
@gemini analyze color contrast and accessibility issues
```

### Visual Test Triggers

The following keywords trigger visual testing mode:
- visual
- screenshot
- responsive
- mobile
- tablet
- desktop
- design
- layout
- ui
- css

### MCP Server Configuration

The project includes three MCP servers:

1. **browser-use**: AI-powered browser automation
   - Captures screenshots
   - Analyzes visual design
   - Tests responsive behavior
   - Records videos of interactions

2. **playwright-mcp**: Cross-browser testing
   - Supports Chrome, Firefox, Safari
   - Headless and headed modes
   - Network interception
   - Mobile emulation

3. **filesystem**: File system access
   - Read/write test results
   - Manage screenshots
   - Access project files

### Running Visual Tests Locally

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   playwright install chromium
   ```

2. **Run visual test**:
   ```bash
   python scripts/visual-test.py [URL] [viewports] [test_type]
   ```

   Examples:
   ```bash
   # Test local development
   python scripts/visual-test.py http://localhost:3000

   # Test production with custom viewports
   python scripts/visual-test.py https://asharitech-web.pages.dev "1920x1080,375x667"

   # Test specific viewport
   python scripts/visual-test.py http://localhost:3000 "768x1024"
   ```

3. **Using Docker**:
   ```bash
   docker-compose up -d
   # Access VNC viewer at localhost:5900 (password: gemini123)
   ```

### GitHub Actions Integration

The visual verification workflow can be triggered:

1. **Via workflow dispatch**:
   - Go to Actions → Visual Verification
   - Click "Run workflow"
   - Enter URL and viewport sizes

2. **Via comment**:
   ```
   @gemini run visual verification on https://example.com
   ```

### Output and Reports

Visual tests generate:

1. **Screenshots**: `visual-test-results/screenshots/`
   - Desktop HD (1920x1080)
   - Desktop (1366x768)
   - Tablet (768x1024)
   - Mobile (375x667)

2. **Visual Report**: `visual-test-results/visual-report.md`
   - Responsive design analysis
   - Accessibility issues
   - CSS recommendations
   - Performance suggestions

3. **Metadata**: `visual-test-results/metadata.json`
   - Test configuration
   - Timestamps
   - File paths

### Best Practices

1. **Issue Reporting**:
   - Include screenshots or URLs
   - Specify device/viewport if relevant
   - Describe expected vs actual behavior

2. **Visual Testing**:
   - Test at multiple viewport sizes
   - Check both light and dark modes
   - Verify interactive states (hover, focus)
   - Test with real content, not lorem ipsum

3. **Performance**:
   - Optimize images before deployment
   - Use appropriate image formats (WebP, AVIF)
   - Implement lazy loading
   - Minimize layout shifts

### Environment Variables

Required for full functionality:
```bash
GEMINI_API_KEY=your-api-key
GITHUB_TOKEN=your-github-token

# Optional for Browser-Use
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
```

### Troubleshooting

1. **Browser-Use not working**:
   - Ensure Python 3.8+ is installed
   - Run `pip install browser-use`
   - Install Playwright browsers: `playwright install`

2. **Screenshots failing**:
   - Check if site is accessible
   - Verify viewport sizes are valid
   - Ensure sufficient disk space

3. **MCP connection issues**:
   - Restart the Docker containers
   - Check logs: `docker-compose logs browser-use-mcp`
   - Verify API keys are set

### Advanced Usage

#### Custom Visual Analysis

Create custom analysis tasks:

```python
from browser_use import Agent

agent = Agent(
    task="""
    Analyze the hero section for:
    1. First impression impact
    2. Call-to-action visibility
    3. Loading performance
    4. Mobile optimization
    """,
    llm=None
)
await agent.run()
```

#### Visual Regression Testing

Compare against baseline:

```bash
# Generate baseline
python scripts/visual-test.py --baseline

# Run regression test
python scripts/visual-test.py --compare baseline/
```

#### Accessibility Audit

```bash
# Full accessibility audit
python scripts/visual-test.py --audit accessibility

# Specific WCAG level
python scripts/visual-test.py --wcag AA
```

## Project Information

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Package Manager**: Bun

## Development Commands

```bash
bun install       # Install dependencies
bun run start     # Start development server
bun run build     # Build for production
bun run test      # Run tests
```