'use strict';

const Message = (sequelize, DataTypes) => sequelize.define('Message', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
});

module.exports = Message;
