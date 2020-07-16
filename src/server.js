const express = require('express');
const morgan = require('morgan');
const path = require('path')

//inicializar el server
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.use(require('./routes/api'));

//static files
app.use(express.static(path.join(__dirname, 'views')));

module.exports = app;