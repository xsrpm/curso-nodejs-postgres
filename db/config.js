const config = require('../config/config');
const connectionString = require('./connectionString');

module.exports = {
  development: {
    url: connectionString,
    dialect: `${config.sgbd}`,
  },
  production: {
    url: connectionString,
    dialect: `${config.sgbd}`,
  }
}
