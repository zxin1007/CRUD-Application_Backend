const Sequelize = require ("sequelize")

const sequelize = new Sequelize ('crud','postgres', 'z',{
    host: 'localhost',
    dialect: 'postgres',
    define:{
        freezeTableName:true
    }
})

module.exports = sequelize