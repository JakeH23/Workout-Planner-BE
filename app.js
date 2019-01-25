const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const listEndpoints = require('express-list-endpoints');
const apiRouter = require('./routes/api');
const { DB_URL } = process.env.NODE_ENV === 'production' ? process.env : require('./config/config')
const { handle400s, handle404s, handle500s } = require('./errors/index');

console.log(DB_URL)
mongoose
  .connect(DB_URL)
  .then(console.log('connected'))
  .catch(console.log);

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
  next({ msg: "Page Not Found", status: 404 });
});
app.use(handle400s);
app.use(handle404s);
app.use(handle500s);

module.exports = app;
