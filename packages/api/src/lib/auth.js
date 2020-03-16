const { AuthenticationError } = require('apollo-server');

function requireAuthentication(request) {
  const { currentUser } = request.context;
  const failed = !currentUser || !currentUser.sessionId;

  if (failed) throw new AuthenticationError();

  return currentUser;
}

/**
 * This is to make the life of a developer just a
 * little bit easier. Set the
 * x-unsafe-authorize-as-user header to a user's
 * session id that exists in the db and you're off
 * to the races 🏇
 */
function unsafeAuthorizeByHeader(request) {
  const env = process.env.NODE_ENV || 'production';
  if (env !== 'development') return;

  console.warn('SECURITY ALERT');
  console.warn('The graphql server is running in development mode.');

  const sessionId = request.headers['x-unsafe-authorize-as-user'];

  if (!sessionId) return;

  console.warn('SECURITY ALERT');
  console.warn(
    'x-unsafe-authorize-as-user has been set. Authorizing for',
    sessionId,
  );

  const user = { sessionId };

  return user;
}

/**
 * Get the authorized user from a bearer
 * token in the 'Authorization` header. If
 * no token exists in the request, return
 * `undefined` so that the request can
 * continue without interruption as an
 * unauthenticated request.
 */
async function authorizeByBearerToken(request) {
  return null;

  // const auth = request.headers.authorization || '';
  // const [, token] = auth.split(' ');

  // if (!token) return undefined;

  // const authorizedUser = await AuthService.getUser(token);
  // const { email } = authorizedUser || {};

  // if (!email) return undefined;

  // const user = await Api.getUserByEmail(email);

  // if (!user || !user.id) return undefined;

  // return {
  //   ...user,
  //   email,
  //   token,
  // };
}

module.exports = {
  unsafeAuthorizeByHeader,
  authorizeByBearerToken,
  requireAuthentication,
};
