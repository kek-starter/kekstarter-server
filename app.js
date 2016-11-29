const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const projectRouter = require(path.resolve('./routes/project'));

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error.');
  process.exit();
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Express routes
 */
app.get('/', function(req, res) {
  res.json({ message: 'kek' });
});
app.use('/projects', projectRouter);

/**
 * Error Handler.
 */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log('Kekstarter server is running');
});

module.exports = app;
