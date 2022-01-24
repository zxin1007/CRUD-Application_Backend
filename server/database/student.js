const sequelize = require ("sequelize")
const db = require('./database')

//Student table
const Student = db.define('student', {
    firstName: {
      type: sequelize.STRING,
      allowNull: false,
      ignore_whitespace:true,
      validate:{
        notNull:{
          msg : 'Please enter your first name'
        }
      }
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: false,
        ignore_whitespace:true,
        validate:{
          notNull:{
            msg : 'Please enter your last name'
          }
        }
    },
    email:{
      type: sequelize.STRING,
      validate: {
        notEmpty: {
          msg : 'Please enter your email'
        },  
        isEmail:{
          msg : 'Please enter a validate email'
        }
        
      }
    },
    gpa: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
          check(gpa){
            if (gpa<=0||gpa>=4){
              throw new Error ('gpa must be between 0-4')
            }
          }
        }
    },
    img: {
      type: sequelize.STRING,
      defaultValue: "url.com"
    }
},
{
  timestamps : false,
  initialAutoIncrement: 1
})

module.exports = Student