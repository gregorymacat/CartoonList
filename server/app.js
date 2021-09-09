const express = require('express');
const path = require('path');
const app = express();

const logger = require('morgan');
var configPath = path.join(__dirname, '../env/config.js');
const {port} = require(configPath).server;

app.use(logger('dev'));
var publicPath = path.join(__dirname, '../public');
app.use('/', express.static(publicPath));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});