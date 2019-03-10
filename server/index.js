require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/pictures/', proxy({target:'http://localhost:4000', changeOrigin: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
