const config = require('../config/config');

const USER = config.sgbd==='mysql' ? 'root': encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const PORT = config.sgbd==='mysql' ? '3306': '5432';

const connectionString = `${config.sgbd}://${USER}:${PASSWORD}@${config.dbHost}:${PORT}/${config.dbName}`;

module.exports = connectionString
