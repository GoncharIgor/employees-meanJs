const mongoose = require('mongoose');
const dbConnectionUrl = 'mongodb://localhost:27017/CrudDB';
//const dbConnectionUrl = 'mongodb://93.73.211.171:27017/CrudDB';

class DbConnection {

    async setUpConection() {
        try {
            await mongoose.connect(dbConnectionUrl, {useNewUrlParser: true}); //parser for new Mongo version >3
            console.log('Connection succeeded');
        } catch (error) {
            console.log(`Error in DB connection ${JSON.stringify(error, undefined, 2)}`);
        }
    }
}


module.exports = DbConnection;