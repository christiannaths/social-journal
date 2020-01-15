import * as backendService from './backend';
import config from 'config';

const DELAY = parseInt(config.get('serviceHealthCheckDelay'), 10);
const MESSAGE = '👩‍⚕️  Performing health checks for backend services...';

async function backendServiceCheck() {
  const response = await backendService.getHealth();
  console.info(`👩‍⚕️ @ingenio/backend |`, response.statusText);
}

function healthChecks() {
  console.info(MESSAGE);
  backendServiceCheck();
}

function perform() {
  setTimeout(healthChecks, DELAY * 1000);
  return true;
}

export default { perform };
