#!/usr/bin/env python3
"""
Visual Testing Script using Browser-Use
This script captures screenshots and analyzes website visual design
"""

import asyncio
import os
import sys
from datetime import datetime
from pathlib import Path
import json

# Check if browser-use is installed
try:
    from browser_use import Agent
    from browser_use.browser.browser import Browser, BrowserConfig
except ImportError:
    print("Error: browser-use is not installed.")
    print("Install it with: pip install browser-use")
    sys.exit(1)

# Default configuration
DEFAULT_URL = "http://localhost:3000"
DEFAULT_VIEWPORTS = [
    {"name": "Desktop HD", "width": 1920, "height": 1080},
    {"name": "Desktop", "width": 1366, "height": 768},
    {"name": "Tablet", "width": 768, "height": 1024},
    {"name": "Mobile", "width": 375, "height": 667},
]

async def capture_screenshot(url: str, viewport: dict, output_dir: Path):
    """Capture a screenshot at specific viewport size"""
    config = BrowserConfig(
        headless=True,
        disable_security=True,
        extra_chromium_args=['--no-sandbox', '--disable-dev-shm-usage']
    )
    
    browser = Browser(config=config)
    await browser.start()
    
    try:
        page = await browser.get_current_page()
        await page.set_viewport_size({"width": viewport["width"], "height": viewport["height"]})
        await page.goto(url, wait_until="networkidle")
        
        # Wait for animations
        await asyncio.sleep(2)
        
        # Capture screenshot
        filename = f"{viewport['name'].replace(' ', '_').lower()}_{viewport['width']}x{viewport['height']}.png"
        screenshot_path = output_dir / filename
        await page.screenshot(path=str(screenshot_path), full_page=True)
        
        print(f"✅ Captured screenshot: {filename}")
        return screenshot_path
        
    finally:
        await browser.close()

async def analyze_visual_issues(url: str, screenshots: list):
    """Use Browser-Use Agent to analyze visual issues"""
    
    agent = Agent(
        task=f"""
        Analyze the website at {url} for visual and UX issues:
        
        1. **Responsive Design Analysis**:
           - Check layout consistency across viewports
           - Identify elements that break or overflow
           - Verify mobile-first approach
        
        2. **Visual Hierarchy**:
           - Analyze typography scale and readability
           - Check spacing and alignment
           - Review color contrast for accessibility
        
        3. **Interactive Elements**:
           - Button sizes for mobile (min 44x44px)
           - Touch target spacing
           - Hover states and focus indicators
        
        4. **Performance Indicators**:
           - Check for layout shifts
           - Identify heavy images or resources
           - Suggest optimization opportunities
        
        5. **Accessibility**:
           - Color contrast ratios
           - Font sizes and readability
           - Interactive element labeling
        
        Provide specific, actionable recommendations with CSS examples where applicable.
        """,
        llm=None  # Uses default model
    )
    
    result = await agent.run()
    return result

async def generate_visual_report(url: str, viewports: list, analysis: str, screenshots: dict):
    """Generate a comprehensive visual testing report"""
    
    timestamp = datetime.now().isoformat()
    
    report = f"""# Visual Testing Report

**URL**: {url}  
**Generated**: {timestamp}  
**Viewports Tested**: {len(viewports)}

## Screenshots

"""
    
    for viewport in viewports:
        name = viewport['name']
        path = screenshots.get(name)
        if path:
            report += f"### {name} ({viewport['width']}x{viewport['height']})\n"
            report += f"![{name}]({path})\n\n"
    
    report += f"""
## Visual Analysis

{analysis}

## Quick Fixes

Based on the analysis, here are immediate improvements you can make:

### CSS Improvements
```css
/* Responsive Typography */
:root {{
  --font-size-base: clamp(1rem, 2vw, 1.125rem);
  --font-size-h1: clamp(2rem, 5vw, 3rem);
  --font-size-h2: clamp(1.5rem, 4vw, 2.25rem);
}}

/* Better Mobile Spacing */
@media (max-width: 768px) {{
  .container {{
    padding: 1rem;
    max-width: 100%;
  }}
  
  .button {{
    min-height: 44px;
    min-width: 44px;
    padding: 0.75rem 1.5rem;
  }}
}}

/* Improved Focus States */
:focus-visible {{
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}}
```

## Testing Checklist

- [ ] All text is readable at 100% zoom
- [ ] Interactive elements are at least 44x44px on mobile
- [ ] Color contrast meets WCAG AA standards
- [ ] No horizontal scrolling on mobile devices
- [ ] Forms are easily fillable on all devices
- [ ] Images have appropriate alt text
- [ ] Page is usable with keyboard navigation

## Next Steps

1. Implement the CSS improvements above
2. Test with real devices (not just browser DevTools)
3. Run Lighthouse audits for performance metrics
4. Consider implementing visual regression testing in CI/CD

---
*Report generated by Browser-Use Visual Testing*
"""
    
    return report

async def main():
    """Main visual testing function"""
    
    # Parse command line arguments
    url = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("TEST_URL", DEFAULT_URL)
    
    # Custom viewports if provided
    if len(sys.argv) > 2:
        viewport_strings = sys.argv[2].split(",")
        viewports = []
        for vp in viewport_strings:
            if "x" in vp:
                w, h = vp.split("x")
                viewports.append({
                    "name": f"Custom {w}x{h}",
                    "width": int(w),
                    "height": int(h)
                })
        if not viewports:
            viewports = DEFAULT_VIEWPORTS
    else:
        viewports = DEFAULT_VIEWPORTS
    
    print(f"🎨 Starting Visual Testing")
    print(f"📍 URL: {url}")
    print(f"📱 Viewports: {', '.join([f'{v['name']} ({v['width']}x{v['height']})' for v in viewports])}")
    
    # Create output directory
    output_dir = Path("visual-test-results")
    output_dir.mkdir(exist_ok=True)
    screenshots_dir = output_dir / "screenshots"
    screenshots_dir.mkdir(exist_ok=True)
    
    # Capture screenshots
    print("\n📸 Capturing screenshots...")
    screenshots = {}
    for viewport in viewports:
        try:
            path = await capture_screenshot(url, viewport, screenshots_dir)
            screenshots[viewport['name']] = str(path.relative_to(output_dir))
        except Exception as e:
            print(f"❌ Failed to capture {viewport['name']}: {e}")
    
    # Analyze visual issues
    print("\n🔍 Analyzing visual issues...")
    analysis = await analyze_visual_issues(url, list(screenshots.keys()))
    
    # Generate report
    print("\n📝 Generating report...")
    report = await generate_visual_report(url, viewports, analysis, screenshots)
    
    # Save report
    report_path = output_dir / "visual-report.md"
    with open(report_path, "w") as f:
        f.write(report)
    
    # Save JSON metadata
    metadata = {
        "url": url,
        "timestamp": datetime.now().isoformat(),
        "viewports": viewports,
        "screenshots": screenshots,
        "report_path": str(report_path)
    }
    
    with open(output_dir / "metadata.json", "w") as f:
        json.dump(metadata, f, indent=2)
    
    print(f"\n✅ Visual testing complete!")
    print(f"📊 Report saved to: {report_path}")
    print(f"🖼️  Screenshots in: {screenshots_dir}")
    
    # Print summary
    print("\n📋 Summary:")
    if "mobile" in analysis.lower() and "issue" in analysis.lower():
        print("⚠️  Mobile issues detected - review report for details")
    if "contrast" in analysis.lower():
        print("⚠️  Accessibility concerns found - check color contrast")
    if "responsive" in analysis.lower():
        print("✅ Responsive design analyzed - see recommendations")

if __name__ == "__main__":
    asyncio.run(main())