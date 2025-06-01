// playwtight.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const browsers = { chrome: 'chromium', firefox: 'firefox', safari: 'webkit' }

export const config: PlaywrightTestConfig = {
   /* Maximum time one test can run for. */
   timeout: 150 * 1000,

   expect: {
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
      timeout: 5000,
   },

   /* Fail the build on CI if you accidentally left test.only in the source code. */
   forbidOnly: !!process.env.CI,

   /* Generating (xml and html) reports */
   reporter: [['junit', { outputFile: 'reports/results-junit.xml' }], ['html', { outputFolder: 'reports/html/' }]],

   use: {
      baseURL: "https://kmslh.com/",

      screenshot: 'on',

      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
      trace: 'on',

      headless: false,
      channel: 'chrome',
      viewport: null,                  // Set to null to use the full window size (do not apply a fixed viewport)
      launchOptions: {
         args: ['--start-maximized']   // Launch the browser maximized to full screen
      },

      browserName: process.env.BROWSER ? browsers[process.env.BROWSER] : browsers.chrome
   },

   /* Retry if test fail , if test pass after retry it will be marked as flaky test */
   retries: 1,
   workers: 1,
};

export default config;