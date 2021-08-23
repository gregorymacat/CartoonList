const express = require('express');
const path = require('path');
const app = express();

const logger = require('morgan');
const port = 3000;

app.use(logger('dev'));
var publicPath = path.join(__dirname, '../client/public');
app.use('/', express.static(publicPath));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});