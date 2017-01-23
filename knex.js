const path = require('path');
require('dotenv').config();

module.exports = {

  db: {
    client: 'mysql',
    connection: {
      host: '50.62.209.194',
      user: process.env.db_username,
      password: process.env.db_password,
      database: 'animalsaywhat',
      charset: 'utf8'
    }
  }
};
