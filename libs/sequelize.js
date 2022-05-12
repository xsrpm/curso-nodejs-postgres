const { Sequelize } = require('sequelize');
const config = require('../config/config');
const connectionString = require('../db/connectionString');

const setupModels = require('./../db/models');

const sequelize = new Sequelize(connectionString, {
  dialect: `${config.sgbd}`,
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
