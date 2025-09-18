export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],

    framework: 'cucumber',

    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports',
            outputFileFormat: function (options) {
                return `results-${options.cid}.xml`
            }
        }]
    ],

    cucumberOpts: {
        require: ['./test/step-definitions/*.js'],
        timeout: 60000
    }
}
