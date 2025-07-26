# Playwright MCP Server Dockerfile
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Install Node.js and npm
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install Playwright MCP server
RUN npm install -g @playwright/mcp

# Install additional browsers
RUN npx playwright install chromium firefox webkit

# Create directories for data and screenshots
RUN mkdir -p /data /screenshots

# Expose MCP HTTP port
EXPOSE 3001

# Start Playwright MCP server
CMD ["npx", "@playwright/mcp", "start", "--transport", "http", "--port", "3001"]