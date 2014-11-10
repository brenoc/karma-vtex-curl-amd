var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var vtexCurlPath = require('path').dirname(require.resolve('vtex-curl-amd') + '/curl.js');

var initVTEXCurl = function(files) {
  files.unshift(createPattern(vtexCurlPath));
  files.unshift(createPattern(__dirname + '/adapter.js'));
};

initVTEXCurl.$inject = ['config.files'];

module.exports = {
  'framework:vtex-curl-amd': ['factory', initVTEXCurl]
};
