const ARGS = process.argv.slice(2);
const command = (ARGS[0] || '').toUpperCase();
const subCommand = (ARGS[1] || '').toUpperCase();
const flags = ARGS.slice(2).map((flag) => (flag || '').toUpperCase());

module.exports = {
  command,
  subCommand,
  flags,
};
