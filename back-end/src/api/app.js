const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

const { userRouter, customerRouter } = require('./routers');

app.use('/', userRouter);
app.use('/customer', customerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
