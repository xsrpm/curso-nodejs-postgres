const { Sequelize } = require('sequelize');
const config = require('../config/config');

const setupModels = require('./../db/models');

console.log({config});

const USER = config.sgbd==='mysql' ? 'root': encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const PORT = config.sgbd==='mysql' ? '3306': '5432';

const URI = `${config.sgbd}://${USER}:${PASSWORD}@${config.dbHost}:${PORT}/${config.dbName}`;
const sequelize = new Sequelize(URI, {
  dialect: `${config.sgbd}`,
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
