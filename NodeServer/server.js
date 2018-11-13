const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const employeeController = require('./controllers/employeeController');

const uiUrl = "http://localhost:4205";

class Server {

    constructor() {
    }

    startServer(port) {
        const app = express();
        app.use(bodyParser.json());
        app.use(cors({origin: uiUrl}));//allow requests from any port number (not only 3000) or domain (UI)
        app.listen(port, () => console.log(`Server started at port: ${port}`));
        app.use('/employees', employeeController);
        return app;
    }
}

module.exports = Server;