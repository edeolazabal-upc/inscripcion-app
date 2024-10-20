const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json'); // Cambia la ruta si es necesario
const middlewares = jsonServer.defaults();

// Habilitar CORS
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server está corriendo en el puerto 3000');
});
