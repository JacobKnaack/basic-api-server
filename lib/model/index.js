'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const messageSchema = require('./message.schema.js');

// create an connection instance singleton, using a connection string (like a URL)
// typical connection string: postgresql://localhost:5432/messages
let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}); // this takes a string, that can connect us to a running sequezlize db.

// configure our db instance with any schemas we want to define
const MessageModel = messageSchema(db, DataTypes);

module.exports = {
  db,
  MessageModel,
};
