import { URLSearchParams } from 'url';
import { ApolloError } from 'apollo-server';
import config from 'config';
import { resolverFn, ResolverRequest as R } from '../../lib/resolver';
import spec from './spec';
import { OAuthProvider } from './oauth-provider';
import {
  OAuthorize,
  OAuthorizeArgs,
  OAuthorization,
  CreateOAuthorizationInput,
  CreateOAuthorizationPayload,
  ClioOAuthorizationResponse,
} from './oauthorization.d';

const clio = config.get('clio') as any;

async function authorizeClio(
  code: string,
  redirectUrl?: string,
): Promise<OAuthorization> {
  const params = new URLSearchParams();
  params.append('client_id', clio.clientId);
  params.append('client_secret', clio.clientSecret);
  params.append('code', code);
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', redirectUrl || clio.redirectUrl);

  const url = spec.endpoint.token[OAuthProvider.Clio];
  const data = await fetch(url, {
    method: 'POST',
    body: params,
  });
  const json: ClioOAuthorizationResponse = await data.json();

  if (json.error_description) {
    throw new ApolloError(json.error_description);
  }
  if (!json.access_token) {
    throw new ApolloError('could not read access token');
  }

  const id = Date.now().toString();
  const provider = OAuthProvider.Clio;
  const token = json.access_token;

  return { id, provider, token };
}

async function createOAuthorizationResolver(
  request: R,
): Promise<CreateOAuthorizationPayload> {
  const args: CreateOAuthorizationInput = request.args;
  const { code, redirectUrl, provider } = args.input;
  switch (provider) {
    case OAuthProvider.Clio:
      const authorization = await authorizeClio(code, redirectUrl);
      return { authorization };
    default:
      throw new ApolloError('unsupported oauth provider');
  }
}

async function oauthorizeResolver(request: R): Promise<OAuthorize> {
  const args: OAuthorizeArgs = request.args;
  const { redirectUrl } = args;

  const params = {
    redirect_uri: redirectUrl,
    response_type: 'code',
  } as any;

  switch (args.provider) {
    case OAuthProvider.Clio:
      params.client_id = clio.clientId;
      params.redirect_uri = params.redirect_uri || clio.redirectUrl;
      break;
    default:
      throw new ApolloError('unsupported oauth provider');
  }

  const query = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const endpoint = spec.endpoint.authorize[args.provider];
  const url = `${endpoint}?${query}`;
  return { url };
}

const resolvers = {
  Query: {
    oauthorize: resolverFn(oauthorizeResolver),
  },
  Mutation: {
    oauthorizeCreate: resolverFn(createOAuthorizationResolver),
  },
};

export { resolvers };
export default resolvers;
