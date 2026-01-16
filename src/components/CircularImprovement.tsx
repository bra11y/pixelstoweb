import { useEffect } from 'react';
import { initializeCircularImprovement } from '../utils/ai-analytics';

const CircularImprovement = () => {
  useEffect(() => {
    // Initialize the circular improvement system on app load
    const init = async () => {
      try {
        // Only run on production or when specifically enabled
        const shouldRun = import.meta.env.PROD || import.meta.env.VITE_ENABLE_AI_ANALYTICS === 'true';
        
        if (shouldRun) {
          console.log('Initializing circular improvement system...');
          await initializeCircularImprovement();
        }
      } catch (error) {
        console.error('Failed to initialize circular improvement system:', error);
      }
    };

    // Run immediately
    init();

    // Set up weekly analysis (every 7 days)
    const weeklyInterval = setInterval(async () => {
      try {
        console.log('Running weekly circular improvement analysis...');
        await initializeCircularImprovement();
      } catch (error) {
        console.error('Weekly analysis failed:', error);
      }
    }, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

    // Cleanup interval on unmount
    return () => {
      clearInterval(weeklyInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CircularImprovement;