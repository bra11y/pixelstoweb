import { chromium } from 'playwright';

async function testLeadOptimizationDesign() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to the homepage
    await page.goto('http://localhost:8081');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Wait for the time-based lead optimization modal to appear (30 seconds)
    console.log('Waiting for lead optimization modal...');
    await page.waitForTimeout(31000);
    
    // Check if the modal is visible
    const modal = await page.locator('[style*="background-image"]').first();
    const isVisible = await modal.isVisible();
    
    if (isVisible) {
      console.log('✅ Lead optimization modal is visible');
      
      // Take a screenshot of the modal
      await page.screenshot({ 
        path: 'lead-optimization-modal.png',
        fullPage: true 
      });
      
      // Check text contrast by getting computed styles
      const heading = await page.locator('h3').first();
      const headingStyles = await heading.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          color: styles.color,
          textShadow: styles.textShadow,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight
        };
      });
      
      console.log('Heading styles:', headingStyles);
      
      // Check if background image is loaded
      const backgroundDiv = await page.locator('[style*="background-image"]').first();
      const backgroundStyle = await backgroundDiv.getAttribute('style');
      console.log('Background style:', backgroundStyle);
      
      // Test form input visibility
      const emailInput = await page.locator('input[type="email"]');
      const inputStyles = await emailInput.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: styles.border
        };
      });
      
      console.log('Input styles:', inputStyles);
      
      // Test button visibility
      const submitButton = await page.locator('button[type="submit"]');
      const buttonText = await submitButton.textContent();
      const buttonStyles = await submitButton.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color
        };
      });
      
      console.log('Button text:', buttonText);
      console.log('Button styles:', buttonStyles);
      
      console.log('✅ Design verification completed');
      
    } else {
      console.log('❌ Lead optimization modal not visible');
    }
    
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
testLeadOptimizationDesign();