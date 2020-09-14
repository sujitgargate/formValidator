var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./app/routes/userdata.routes');
var database = require('./config/database.config');
database.mongoose;

var dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', userRoutes);
app.listen(port, () => {
    console.log('Server listening on', +port);
})