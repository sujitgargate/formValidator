var mongoose = require('mongoose');
var dotenv =require('dotenv');
dotenv.config();

const databaseUrl = process.env.DATABASE;

mongoose.connect(databaseUrl, {
    useNewUrlParser:true
})

.then(() => {
    console.log('connection to DB Sucessful');
})

.catch(error => {
    console.log('Error occured' + error);
    process.exit();
})