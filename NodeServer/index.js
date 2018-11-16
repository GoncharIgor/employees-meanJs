const DbConnection = require('./db');
const Server = require('./server');

server = new Server();

server.startServer(3000);
DbConnection.setUpConnection().then();