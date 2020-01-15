const AuthService = require('./services/auth');
const BackendService = require('./services/backend');

/**
 * This is to make the life of a developer just a
 * little bit easier. Set the
 * x-unsafe-authorize-as-user header
 * to an email address that exists in the db and
 * you're off to the races 🏇
 */
async function developmentAuthorize(request) {
  const env = process.env.NODE_ENV || 'production';
  if (env !== 'development') return;

  console.warn('SECURITY ALERT');
  console.warn('The graphql server is running in development mode.');

  const email = request.headers['x-unsafe-authorize-as-user'];

  if (!email) return;

  console.warn('SECURITY ALERT');
  console.warn(
    'x-unsafe-authorize-as-user has been set. Authorizing for',
    email,
  );

  const user = await BackendService.getUserByEmail(email);

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
async function authorizedUserContext(request) {
  const override = await developmentAuthorize(request);

  if (override) return override;

  const auth = request.headers.authorization || '';
  const [, token] = auth.split(' ');

  if (!token) return undefined;

  const authorizedUser = await AuthService.getUser(token);
  const { email } = authorizedUser || {};

  if (!email) return undefined;

  const user = await BackendService.getUserByEmail(email);

  if (!user || !user.id) return undefined;

  return {
    ...user,
    email,
    token,
  };
}

const context = async ({ req }) => {
  try {
    const currentUser = await authorizedUserContext(req);
    return { auth: currentUser };
  } catch {
    return { auth: null };
  }
};

module.exports = { context };
