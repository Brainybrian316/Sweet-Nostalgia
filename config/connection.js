// Modules
const Sequelize = require('sequelize');
require('dotenv').config();

// create a connection to our database using a teniary operator to check if the enviroment is production or not
const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // the purpose of host is to tell the database where to connect to
    host: process.env.DB_HOST,
    // the purpose of dialect is to define the type of database we are using
    dialect: 'mysql',
    // the purpose of port is to allow us to use the same database on multiple computers
    port: 3306
});

module.exports = sequelize;
