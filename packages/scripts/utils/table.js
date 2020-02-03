const chalk = require('chalk');
var columnify = require('columnify');

function hr(n = 10) {
  const chr = '─';
  const str = new Array(n + 1).join(chr);
  return chalk.grey(str);
}

const OPTIONS = {
  minWidth: 10,
  config: {
    command: { maxWidth: 10 },
    description: { maxWidth: 30 },
    example: { maxWidth: 30 },
  },
};

const content = [
  // {
  //   command: hr(10),
  //   description: hr(25),
  //   example: hr(25),
  // },
  {
    command: 'help',
    description: 'prints this help message',
    example: 'orca-scripts help',
  },

  {
    command: 'version',
    description: 'prints the version and exits',
    example: 'orca-scripts version',
  },

  {
    command: 'start',
    description: 'starts a package',
    example: `orca-scripts start <package>`,
  },
];

function addHeaderBorder(content, options) {
  const columns = O;
  return [...content];
}

function table({ content, styles, options }) {
  content = [...content];
  columnify(styledContent, OPTIONS);
  return tabledContent;
}

console.log(
  table({
    content: [
      {
        command: 'foo',
        description: 'foo bar baz',
        example: 'balh',
      },
      {
        command: 'bar',
        description: 'bar baz qux',
        example: 'bingo',
      },
    ],
    styles: {
      command: chalk.blue.bold,
      description: chalk.grey,
    },
  }),
);

module.exports = table;
