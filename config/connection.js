require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    {
      database: process.env.DB_NAME, 
      username: process.env.DB_USER, 
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
