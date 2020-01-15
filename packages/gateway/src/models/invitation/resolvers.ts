import * as Backend from '../../services/backend';
import {
  resolverFn,
  ResolverRequest as R,
  requireAuthentication,
} from '../../lib/resolver';

async function createInvitationResolver(request: R): Promise<any> {
  const auth = requireAuthentication(request);
  const { args } = request;
  const response = await Backend.createInvitation(args.input, auth);
  return response;
}

const resolvers = {
  Mutation: {
    createInvitation: resolverFn(createInvitationResolver),
  },
};

export { resolvers };
export default resolvers;
