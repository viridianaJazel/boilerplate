const http = require('http');
const app = require('express')();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const config = require('./config/server');
const routes = require('./routes');

const server = http.createServer(app);

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  let message = err.type;
  if (err.type === 'entity.parse.failed') {
    message = 'JSON decoding error: Syntax error, malformed JSON';
  }
  return res.status(500).send({ error: message });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use(cookieParser());
app.use(session({
  secret: config.secretKey,
  resave: true,
  saveUninitialized: false
}));
app.use(errorHandler);

// connect all our routes to our application
app.use('/', routes);

// start the server
server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Catalogue of Illustrations listening at port: ${config.port}`);
});

module.exports = server;
