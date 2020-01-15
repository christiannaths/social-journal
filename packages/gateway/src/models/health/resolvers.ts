import { resolverFn, ResolverRequest as R } from '../../lib/resolver';
import * as backendService from '../../services/backend';

async function healthResolver(request: R): Promise<any> {
  console.debug('request.args', request.args);
  console.debug('request.context', request.context);

  const response = await backendService.getHealth();
  const status = response.status.toString();

  return { backend: status };
}

const resolvers = {
  Query: {
    health: resolverFn(healthResolver),
  },
};

export { resolvers };
export default resolvers;
