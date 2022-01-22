const router = require('express').Router()
const { Student, db } = require('../database/index')

router.get('/',async (req, res)=>{
    try{
        const student = await Student.findAll();
        res.send(student)
    } catch(err){
        console.log(err)
    }
})
router.post('/',async(req, res)=>{
    try{
        console.log(req.body)
        // const newStudent = await Student.create()
        // res.json(newStudent)
    } catch(err){
        console.log(err)
    }
})

module.exports = router