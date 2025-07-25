# MCP Browser Automation with Gemini CLI

This repository now includes **Model Context Protocol (MCP) Browser Automation** integration with Gemini CLI, enabling AI-powered visual testing and browser automation.

## 🎯 Features

### Automated Visual Testing
- **Screenshot Capture**: Automated screenshots across multiple viewports (mobile, tablet, desktop)
- **Visual Verification**: AI-powered analysis of UI changes and improvements
- **Browser Automation**: Playwright-based browser control for comprehensive testing
- **Visual Reports**: Automated generation of visual testing reports with recommendations

### Integration Points
- **GitHub Actions**: Automatic visual testing on PR creation
- **Issue Comments**: Trigger visual testing with `@gemini visual` commands
- **Screenshot Management**: Automated screenshot capture and repository commits

## 🚀 Usage

### Automatic Triggers
1. **Pull Request Creation**: Visual testing runs automatically on new PRs
2. **Visual Command**: Comment `@gemini visual` on issues/PRs to trigger visual testing
3. **UI Improvements**: AI detects and implements visual improvements with verification

### Manual Testing
```bash
# Local MCP configuration is in .gemini/settings.json
# Screenshots are saved to .screenshots/ directory
# Use @gemini visual command for on-demand testing
```

## 🛠 Technical Architecture

### MCP Servers
- **Playwright MCP**: Browser automation and screenshot capture
- **Screenshot MCP**: Dedicated screenshot functionality
- **Browser Support**: Chromium (primary), with multi-browser capability

### Configuration
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "timeout": 60000
    },
    "screenshot": {
      "command": "npx", 
      "args": ["-y", "@sethbang/mcp-screenshot-server"],
      "timeout": 30000
    }
  }
}
```

### Visual Testing Workflow
1. **Development Server**: Automatically starts local server
2. **Multi-Viewport Testing**: Tests across mobile (375px), tablet (768px), desktop (1920px)
3. **Screenshot Capture**: Captures before/after states
4. **AI Analysis**: Gemini analyzes visual changes and provides feedback
5. **Report Generation**: Creates comprehensive visual verification reports
6. **Repository Integration**: Commits screenshots and posts reports

## 📸 Screenshot Management

Screenshots are organized in `.screenshots/` directory:
- `before/` - Baseline screenshots
- `after/` - Post-change screenshots
- Automatically committed to repository for visual history
- Temp files excluded via `.gitignore`

## 🔧 Development Integration

### Local Development
- MCP configuration in `.gemini/settings.json` 
- Screenshots preserved for visual comparison
- Browser automation available for manual testing

### CI/CD Integration
- Playwright installation with browser dependencies
- MCP server setup in GitHub Actions
- Automated visual regression testing
- Integration with existing Gemini CLI workflows

## 🎨 Visual Testing Capabilities

### Automated Checks
- Layout consistency across viewports
- Typography and spacing verification  
- Color scheme and accessibility analysis
- Interactive element testing (buttons, forms, animations)
- Loading states and transition verification
- Responsive design breakpoint testing

### AI-Powered Analysis
- Visual improvement recommendations
- Accessibility issue detection
- Browser compatibility assessment
- User experience optimization suggestions

## 📋 Commands

### Available Commands
- `@gemini visual` - Trigger comprehensive visual testing
- `@gemini visual mobile` - Focus on mobile viewport testing
- `@gemini visual desktop` - Focus on desktop viewport testing
- `@gemini screenshot` - Capture current state screenshots

### Example Usage
```
@gemini visual
# Triggers full visual testing suite with multi-viewport analysis

@gemini I updated the button styling, can you verify it looks good?
# AI will implement changes and automatically run visual verification
```

## 🔍 Visual Reports

Each visual testing session generates:
- **Screenshot Evidence**: Before/after visual comparisons
- **Technical Analysis**: Layout, spacing, and responsive behavior
- **Accessibility Review**: Color contrast, focus states, ARIA compliance
- **Browser Compatibility**: Cross-browser rendering consistency
- **Improvement Recommendations**: Specific suggestions for enhancement

## 🚦 Getting Started

1. **Automatic Setup**: MCP configuration is already in place
2. **Create PR**: Visual testing runs automatically
3. **Use Commands**: Comment `@gemini visual` for on-demand testing
4. **Review Reports**: Check generated visual verification reports
5. **Iterate**: Use AI feedback to improve visual quality

The system is designed to enhance visual quality assurance through AI-powered automation while maintaining comprehensive visual documentation of all changes.