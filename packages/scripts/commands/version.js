const print = require('../utils/print');
const pkg = require('../package.json');

function versionCmd() {
  print('orca-scripts', pkg.version);
}

module.exports = versionCmd;
