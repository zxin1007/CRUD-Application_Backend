const sequelize = require ("sequelize")
const db = require('./database')

const Campus = db.define('campus', {
    id :{
      type: sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg : 'Please enter campus name'
        }
      }
    },
    address: {
      type: sequelize.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg : 'Please enter the adress'
        }
      }
    },
    city: {
        type: sequelize.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg : 'Please enter the city'
          }
        }
    },
    state: {
        type: sequelize.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg : 'Please enter the state'
          }
        }
    },
    zip: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate:{
          check(zip){
            if (!(/^\d{5}$/.test(zip))){
              throw new Error('zip code incorrect')
            }
          }
        }
    },
    description: {
        type: sequelize.TEXT
    },
    img: {
      type: sequelize.STRING,
      defaultValue: "url.com"
    },
},
{
  timestamps : false
})

module.exports = Campus