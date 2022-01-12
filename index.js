'use strict';

require('dotenv').config();
const { start } = require('./lib/server.js');
const { db } = require('./lib/model');
const PORT = process.env.PORT || 3000;

// in order to perform operations against our db, we have to intialize

// create tables and initizes them before we start our server.
db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));
