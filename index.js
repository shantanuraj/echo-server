const {
  Server
} = require('hapi');

const server = new Server({ port: process.env.PORT || 3000, host: 'localhost' })

const echoHandler = (request) => {
  const {
    path,
    query,
    headers,
    payload,
  } = request;

  const res = {
    path,
    query,
    headers,
    payload,
  };

  console.log(Date.now(), '\n', res);

  return res;
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
