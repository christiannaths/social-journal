const config = require('config');
const server = require('./server');
const { host, port } = config.get('server');

server.listen({ host, port }).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`);
});
