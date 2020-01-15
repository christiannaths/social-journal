import { AuthenticationError } from 'apollo-server';

interface ResolverRequest {
  parent: any;
  args: any;
  context: any;
  info: any;
}

function resolverFn(next: any): any {
  return function resolverArgs(
    parent: any,
    args: any,
    context: any,
    info: any,
  ): any {
    return next({ parent, args, context, info });
  };
}

function requireAuthentication(request: ResolverRequest): any {
  const { auth } = request.context;
  const failed = !auth || !auth.id;

  if (failed) throw new AuthenticationError('Authentication failed');

  return auth;
}

export { resolverFn, ResolverRequest, requireAuthentication };
