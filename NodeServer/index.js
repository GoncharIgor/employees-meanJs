const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DbConnection = require('./db');
const employeeController = require('./controllers/employeeController');
dbConnection = new DbConnection();

const uiUrl = "http://localhost:4205";

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: uiUrl}));//allow requests from any port number (not only 3000) or domain (UI)
app.listen(3000, () => console.log('Server started at port: 3000'));

dbConnection.setUpConection().then();
app.use('/employees', employeeController);