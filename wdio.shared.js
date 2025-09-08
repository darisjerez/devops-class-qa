export const config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': { args: ['--headless=new','--disable-gpu','--window-size=1280,800'] }
  }],
  logLevel: 'info',
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: { require: ['./features/step-definitions/*.js'], timeout: 60000 },
  services: ['devtools'],
  baseUrl: process.env.BASE_URL || 'https://example.com',
}