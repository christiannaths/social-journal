import { ApolloError, ForbiddenError } from 'apollo-server';

function errorMessage(response) {
  const { apiStatus, errors } = (response.data || {}) as any;
  if (!errors) return apiStatus;
  if (typeof errors === 'number') return errors;
  if (typeof errors === 'string') return errors;
  if (Array.isArray(errors)) return errors[0];
  return Object.keys(errors).map((key) => `${key} ${errors[key]}`)[0];
}

function BackendApiError(response) {
  const { apiStatus } = (response.data || {}) as any;
  const error = errorMessage(response);

  switch (apiStatus) {
    case 'ACCESS_DENIED':
      return new ForbiddenError(apiStatus);

    default:
      return new ApolloError(error, apiStatus);
  }
}

export { BackendApiError };
export default { BackendApiError };
