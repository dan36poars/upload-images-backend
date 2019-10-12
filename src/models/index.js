const Sequelize = require('sequelize');
const optSequelize = require('../config/sequelize.Config');

const sequelize = new Sequelize(optSequelize.database, optSequelize.username, optSequelize.password, optSequelize );

const db = {}

// Testing connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
