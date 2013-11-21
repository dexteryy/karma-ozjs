var path = require('path');

var createPattern = function(path) {
    return { pattern: path, included: true, served: true, watched: false };
};

var initOz = function(files) {
    var ozPath = path.dirname(require.resolve('ozjs'));
    files.unshift(createPattern(__dirname + '/adapter.js'));
    files.unshift(createPattern(ozPath + '/oz.js'));
};

initOz.$inject = ['config.files'];

module.exports = {
    'framework:ozjs': ['factory', initOz]
};

