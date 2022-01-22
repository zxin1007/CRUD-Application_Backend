const sequelize = require ("sequelize")
const db = require('./database')

const Campus = db.define('campus', {
    campusId: {
      type: sequelize.INTEGER,
      primarykey: true,
      autoincrement : true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    address: {
      type: sequelize.STRING,
      allowNull: false
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    },
    state: {
        type: sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    },
    img: {
      type: sequelize.STRING
    },
},
{
  timestamps : false
})

module.exports = Campus