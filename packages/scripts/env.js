const path = require('path');

const configDir = path.resolve(__dirname, '../../', 'config');
process.env.NODE_CONFIG_DIR = configDir;

module.exports = process;
