import { fetch } from './base';

async function getHealth() {
  try {
    const response = await fetch('/actuator/health');
    const { headers, status, data } = response;
    const statusText = data.status;
    const apiStatus = data.status;
    const success = true;

    return {
      headers,
      status,
      statusText,
      apiStatus,
      success,
      data,
    };
  } catch (error) {
    return {
      headers: null,
      status: 500,
      statusText: 'DOWN',
      apiStatus: 'DOWN',
      success: false,
      data: {},
    };
  }
}

export { getHealth };
export default { getHealth };
