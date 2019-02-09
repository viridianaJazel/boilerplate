const winston = require('winston');
const apiConfig = require('../config/server');

/**
* Logger configurations. so far just login to the console
*/
const logger = new winston.Logger({
  level: apiConfig.logLevel,
  colorize: true,
  transports: [
    new (winston.transports.Console)()
  ]
});

module.exports = {
  log: logger,
  profile: winston.profile
};
