const PORT = process.env.PORT ? process.env.PORT : 5000;

const UI_SECRET_KEY = process.env.UI_SECRET_KEY
  ? process.env.UI_SECRET_KEY : 'superSecretKey';

/**
* API configuration module.
* @properties:
* apiPort: the port where the API will be running
* logLevel: the logging level for the API (debug,info,warning)
* dbaas: JENKINS API configuration options
*/
module.exports = {
  secretKey: UI_SECRET_KEY,
  port: PORT,
  logLevel: 'debug',
};
