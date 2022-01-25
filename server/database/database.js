const Sequelize = require ("sequelize")
const env = require('dotenv').config()

//create your env file or directly edit, change the following to your db,username
//password and host
//set up connection to database
const sequelize = new Sequelize (process.env.DATABASE, process.env.USERNAME, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'postgres',
    define:{
        freezeTableName:true
    },
    logging : false,
    native:true
})

module.exports = sequelize