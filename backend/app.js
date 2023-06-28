const express = require('express');
const app = express();
const errorHandler = require('./middleware/err')

app.use(express.json());

//Routes import
const product = require('./routes/productRoute');

app.use('/api/v1', product)

//Middleware for error
app.use(errorHandler);


module.exports = app;