const {
  Server
} = require('hapi');

const server = new Server({ port: 3000, host: 'localhost' })

const echoHandler = (request) => {
  const {
    query,
    headers,
    payload,
  } = request;

  return {
    query,
    headers,
  }
};

const echoRoute = {
  method: '*',
  path: '/',
  handler: echoHandler,
}

const main = async () => {
  try {
    server.route(echoRoute);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }
}

main();
