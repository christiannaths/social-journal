function hr(n = 10) {
  const chr = '─';
  return new Array(n + 1).join(chr);
}

module.exports = hr;
