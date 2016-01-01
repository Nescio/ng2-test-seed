module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/es6-shim/es6-shim.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.js',
            'node_modules/angular2/bundles/testing.dev.js',
            'karma-test-shim.js',
            { pattern: 'src/test/matchers.js', included: true, watched: true },
            { pattern: 'src/**/*.js', included: false, watched: true },
            { pattern: 'src/**/*.html', included: false, watched: true },
            { pattern: 'src/**/*.css', included: false, watched: true },
            { pattern: 'src/**/*.ts', included: false, watched: false },
            { pattern: 'src/**/*.js.map', included: false, watched: false }
        ],
        proxies: {
            "/app/": "/base/src/app/"
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
}