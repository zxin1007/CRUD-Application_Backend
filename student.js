const sequelize = require ("sequelize")
const db = require('./database')

const Student = db.define('student', {
    student_id: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    campus_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    first_name: {
      type: sequelize.STRING,
      allowNull: false
    },
    last_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    gpa: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    img: {
      type: sequelize.TEXT
    }
})

module.exports = Student