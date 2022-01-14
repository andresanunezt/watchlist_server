const {Sequelize, DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('database','username', 'password', {
dialect: 'sqlite',
storage: './show_database.sqlite',
logging: false
}) 


module.exports = {sequelize, DataTypes, Model}