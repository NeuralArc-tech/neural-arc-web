# GEMINI Configuration

This document contains configuration and instructions for the Gemini CLI bot integration in this repository.

## Overview

The repository uses a streamlined Gemini CLI workflow that provides autonomous engineering capabilities including issue triage, pull request review, and custom command processing.

## Available Commands

### Issue Automation
When creating issues, Gemini automatically:
- Analyzes issue content and attachments
- Applies appropriate labels and priority
- Creates implementation plans when requested
- Can autonomously implement solutions

### Pull Request Review
When PRs are opened, Gemini provides:
- Automated code review and analysis
- Security and performance assessments
- Actionable feedback and suggestions

### Custom Commands
Comment with `@gemini [your request]` to get:
- Code analysis and explanations
- Implementation assistance
- Bug fixes and improvements
- Documentation updates

#### Example Commands
```
@gemini analyze this performance issue
@gemini implement dark mode toggle
@gemini review security concerns in this code
@gemini add responsive design to the header
@gemini optimize this component for better performance
```

## Workflow Features

### Autonomous Implementation
Gemini can automatically:
- Create feature branches
- Implement requested changes
- Generate pull requests
- Update existing PRs

### Smart Triage
Issues are automatically:
- Labeled by priority and difficulty
- Analyzed for technical requirements
- Tagged with appropriate categories

### Attachment Processing
Gemini can download and analyze:
- Screenshots and design mockups
- Configuration files
- Documentation attachments
- Any GitHub uploaded files

## Permissions

Only users with these GitHub associations can trigger AI features:
- **OWNER**
- **MEMBER** 
- **COLLABORATOR**

## Environment Variables

Required for functionality:
```bash
GEMINI_API_KEY=your-gemini-api-key
GITHUB_TOKEN=github-actions-token
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