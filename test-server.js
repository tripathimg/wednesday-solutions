require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./api/routes/index.js')
const bodyParser = require('body-parser')
const port = 3005;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', routes);
app.listen(process.env.TEST_PORT)
module.exports = app