const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const express_enforces_ssl = require('express-enforces-ssl'); 
const contentLength = require('express-content-length-validator');

const dotenv = require('dotenv').config();
const db = require('./db/db.js');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cors());

app.use(helmet());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(contentLength.validateMax());

app.use(express.static('./client'));
app.use(express.static(__dirname + '/../client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
  db.build_Db();
  console.log("Server is listening...");
});
