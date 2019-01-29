const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const listEndpoints = require('express-list-endpoints');
const apiRouter = require('./routes/api');
const { DB_URL } = process.env.NODE_ENV === 'production' ? process.env : require('./config');
const { handle400s, handle404s, handle500s } = require('./errors/index');

mongoose
  .connect(DB_URL);

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  if (req.url === '/api' || req.url === '/api/') {
    if (req.method === 'GET') {
      res.status(200).json({ paths: listEndpoints(app) });
    }
  } else next();
});

app.use('/api', apiRouter);


app.use('/*', (req, res, next) => {
  next({ msg: 'Page Not Found', status: 404 });
});
app.use(handle400s);
app.use(handle404s);
app.use(handle500s);

module.exports = app;
