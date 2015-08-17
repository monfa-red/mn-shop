'use strict';

/**
 * Module dependencies
 */
import debug from 'debug';
import config from './config';
import chalk from 'chalk';


/**
 * Export list
 */
export default {

  server: {
    error: onServerError,
    listening: onServerListening
  },

  db: {
    error: dbConnectionError,
    success: dbConnectionSucess
  }

};


/**
 * Event handler for HTTP server "error" event
 */
function onServerError(err) {
  if (err.syscall !== 'listen') {
    throw err;
  }

  let bind = typeof config.port === 'string'
    ? 'Pipe ' + config.port
    : 'Port ' + config.port;

  // handle specific listen errors with friendly messages
  switch (err.code) {
    case 'EACCES':
      console.error(chalk.bgRed('\t' + bind + ' requires elevated privileges'));
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(chalk.bgRed('\t ' + bind + ' is already in use '));
      process.exit(1);
      break;
    default:
      throw err;
  }
};


/**
 * Event handler for HTTP server "listening" event
 */
function onServerListening() {
  let address = this.address();
  let bind = typeof address === 'string'
    ? 'pipe ' + address
    : 'port ' + address.port;

  debug(config.app.title);
  debug('Listening on ' + bind);
  console.log(
    chalk.bgBlue('\t   Listening on ')
    + chalk.bgBlue.red(bind)
    + chalk.bgBlue('   ')
  );
};


/**
 * Event handler for MongoDB connection "error" event
 */
function dbConnectionError(err) {
  console.error(chalk.bgRed('\t  Could not connect to MongoDB  '));
  console.error(chalk.red(err));
};


/**
 * Event handler for MongoDB connection "open" event
 */
function dbConnectionSucess(callback) {
  console.log(chalk.bgBlue('\t    Connected to MongoDB    '))
  // Call success callback
  if (callback) callback();
};
