const testRouter = require('express')();
const { serveTestData } = require('../controllers/serveTestData');

testRouter.route('/').get(serveTestData);

module.exports = testRouter;
