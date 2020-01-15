import { OAuthProvider } from './oauth-provider';

const oauthAuthorizeEndpoint = {
  [OAuthProvider.Clio]: 'https://app.clio.com/oauth/authorize',
};

const oauthRetrieveTokenEndpoint = {
  [OAuthProvider.Clio]: 'https://app.clio.com/oauth/token',
};

const oauthEndpoint = {
  authorize: oauthAuthorizeEndpoint,
  token: oauthRetrieveTokenEndpoint,
};

const spec = {
  endpoint: oauthEndpoint,
};

export default spec;
