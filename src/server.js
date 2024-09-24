const Hapi = require("@hapi/hapi");
const routes = require("./routes");

/**
 * Initializes the Hapi server and sets up the routes
 * @returns {Promise<void>}
 */
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
