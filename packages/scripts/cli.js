#!/usr/bin/env node
require('./env');
const config = require('config');
const args = require('./args');
const helpCmd = require('./commands/help');
const versionCmd = require('./commands/version');

function startPackage(name) {
  const packageConfig = config.get(name);
  console.log('Configuring', packageConfig);
  console.log('Starting', name);
}

function startGateway() {
  startPackage('gateway');
}

if (args.command === 'HELP') {
  helpCmd();
  process.exit(0);
}

if (args.command === 'START') {
  startPackage(args.subCommand.toLowerCase());
  process.exit(0);
}

if (args.command === 'VERSION') {
  versionCmd();
  process.exit(0);
}
