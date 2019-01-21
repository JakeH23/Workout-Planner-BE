const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const testRouter = require('./routes/test');
const apiRouter = require('./routes/api');


app.use(bodyParser.json());
app.use(cors());

app.use('/test', testRouter);
app.use('/api', apiRouter);


module.exports = app;
