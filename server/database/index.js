const Sequelize = require('sequelize')
const Student = require('./student')
const Campus = require('./campus')
const db = require('./database')

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    db,
    Student,
    Campus
}