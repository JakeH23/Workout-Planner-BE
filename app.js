const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const testRouter = require('./routes/test');


app.use(bodyParser.json());
app.use(cors());

app.use('/test', testRouter);


module.exports = app;
