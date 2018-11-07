const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const settingsRouter = require('./routes/burse_settings');
const brockersRouter = require('./routes/brockers');
const stocksRouter = require('./routes/stocks');

const corsOptions = {
    'credentials': true,
    'origin': true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'allowedHeaders': 'Authorization,X-Requested-With,X-HTTP-Method-Override, Content-Type, Cache-Control, Accept',
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', settingsRouter);
app.use('/', brockersRouter);
app.use('/', stocksRouter);


module.exports = app;
module.exports.setts = settingsRouter.setts;
module.exports.brockers = brockersRouter.brockers;
module.exports.stocks = stocksRouter.stocks;
