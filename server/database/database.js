const Sequelize = require ("sequelize")
const env = require('dotenv').config().parsed

const sequelize = new Sequelize (env.database, env.username, env.password,{
    host: env.host,
    dialect: 'postgres',
    define:{
        freezeTableName:true
    },
    logging : false
})

module.exports = sequelize