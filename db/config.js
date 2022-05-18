
const config = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: `${config.sgbd}`,
  },
  production: {
    url: config.dbUrl,
    dialect: `${config.sgbd}`,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
