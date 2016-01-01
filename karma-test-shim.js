Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function() {};

var files = __karma__.files,
    fileKeys = Object.keys(files),
    appFiles = fileKeys
        .filter(function(file) { return /^\/base\/src\/app\/.*\.js$/; })
        .map(function(file) {
            return {
                moduleName: file.replace(/^\/base\/src\/app\//, './').replace(/\.js$/, ''),
                path: file + '?' + files[file]
            };
        })
        .reduce(function(map, item) {
            map[item.moduleName] = item.path;
            return map;
        }, {}),
    specFiles = fileKeys
        .filter(function(file) {
            return /_test\.js$/.test(file);
        });

System.config({
    packages: {
        'base/src/app': {
            defaultExtension: false,
            format: 'register',
            map: appFiles
        }
    }
});

System.import('angular2/src/platform/browser/browser_adapter')
    .then(function(browser_adapter) {
        browser_adapter.BrowserDomAdapter.makeCurrent();
    })
    .then(function() {
        return Promise.all(specFiles.map(function(moduleName) { return System.import(moduleName); }));
    })
    .then(function() {
        __karma__.start();
    }, function(error) {
        __karma__.error(error.stack || error);
    });