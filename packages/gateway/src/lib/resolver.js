function resolver(next) {
  return function resolverArgs(parent, args, context, info) {
    return next({ parent, args, context, info });
  };
}

module.exports = { resolver };
