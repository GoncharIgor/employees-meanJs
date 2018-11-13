const DbConnection = require('./db');
const Server = require('./server');

dbConnection = new DbConnection();
server = new Server();

server.startServer(3000);
dbConnection.setUpConection().then();