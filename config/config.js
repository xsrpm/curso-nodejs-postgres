require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  sgbd: process.env.DATABASE_URL.substring(0, process.env.DATABASE_URL.indexOf('://')),
  dbUrl: process.env.DATABASE_URL,
}

module.exports = config
