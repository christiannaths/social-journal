const chalk = require('chalk');
const figlet = require('figlet');
const columnify = require('columnify');

const LOGO = chalk.greenBright(
  figlet.textSync('Orca', { font: 'ogre' }),
);
const VERSION = chalk.greenBright.bold('Orca Scripts v0.1.0');

const COMMANDS = columnify(
  [
    {
      command: chalk.blue.bold('help'),
      description: 'prints this help message',
      example: 'orca-scripts help',
    },

    {
      command: chalk.blue.bold('version'),
      description: 'prints the version and exits',
      example: 'orca-scripts version',
    },

    {
      command: chalk.blue.bold('start'),
      description: 'starts a package',
      example: `orca-scripts start ${chalk.blue('<package>')}`,
    },
  ],
  {
    minWidth: 30,
    maxWidth: 30,
    columnSplitter: ' ',
    headingTransform: function(heading) {
      return chalk.bold.underline(heading.toUpperCase());
    },
    config: { command: { maxWidth: 10 } },
  },
);

function helpCmd() {
  const print = console.log;

  print();
  print(LOGO);
  print(VERSION);
  print();
  print(COMMANDS);

  print();
}

module.exports = helpCmd;
