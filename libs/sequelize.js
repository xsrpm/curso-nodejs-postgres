const { Sequelize } = require('sequelize');
const config = require('../config/config');

const setupModels = require('./../db/models');

const options = {
  dialect: `${config.sgbd}`,
  logging: (msg)=>{
    if(!config.isProd){
      console.log(msg);
    }
  },
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
