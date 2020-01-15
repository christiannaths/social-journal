import { OAuthProvider } from './oauth-provider';

declare interface OAuthorize {
  url: string;
}

declare interface OAuthorizeArgs {
  provider: OAuthProvider;
  redirectUrl?: string;
}

declare interface OAuthorization {
  id: string;
  provider: OAuthProvider;
  token: string;
}

declare interface CreateOAuthorizationInput {
  input: {
    code: string;
    provider: OAuthProvider;
    redirectUrl: string;
  };
}

declare interface CreateOAuthorizationPayload {
  authorization: OAuthorization;
}

declare interface ClioOAuthorizationResponse {
  error?: string;
  error_description?: string;
  access_token?: string;
}

export {
  OAuthorize,
  OAuthorizeArgs,
  OAuthorization,
  CreateOAuthorizationInput,
  CreateOAuthorizationPayload,
  ClioOAuthorizationResponse,
};
