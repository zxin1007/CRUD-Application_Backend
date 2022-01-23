const Sequelize = require ("sequelize")
const env = require('dotenv').config().parsed

//create your env file or directly edit, change the following to your db,username
//password and host
//set up connection to database
const sequelize = new Sequelize (env.database, env.username, env.password,{
    host: env.host,
    dialect: 'postgres',
    define:{
        freezeTableName:true
    },
    logging : false
})

module.exports = sequelize