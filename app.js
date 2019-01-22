const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const { DB_URL } = process.env.NODE_ENV === 'production' ? process.env : require('./config');

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true },
  )
  .then(console.log('connected'))
  .catch(console.log);

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

module.exports = app;
