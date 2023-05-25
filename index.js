const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router();
const middlwares = jsonserver.defaults();
const port = process.env.PORT || 8080;

server.use(middlwares);
server.use(router);
server.listen(port);
