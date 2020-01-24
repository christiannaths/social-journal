const Api = require('./services/api');
const {
  unsafeAuthorizeByHeader: fromHeader,
  authorizeByBearerToken: fromToken,
} = require('./lib/auth');

async function context({ req }) {
  try {
    const unsafeUser = unsafeAuthorizeByHeader(req);

    if (unsafeUser) return { currentUser: unsafeUser };

    const tokenUser = await authorizeByBearerToken(req);

    if (tokenUser) return { currentUser: tokenUser };

    return {};
  } catch {
    return {};
  }
}

module.exports = { context };
