const router = require('express').Router()
const { Student, Campus } = require('../database/index')

router.route('/')
.get(async (req, res)=>{
    try{
        const student = await Student.findAll();
        res.send(student)
    } catch(err){
        console.log(err)
    }
})
.post(async(req, res)=>{

        console.log(req.body)
        await Student.create({
                id:req.body.id,
                campusId:req.body.campusId,
                email:req.body.email,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                gpa:req.body.gpa,
                img:req.body.img
        }).then(()=>{
          res.json(newStudent)
        }).catch((err)=>{
          if (err.message==='Validation error')console.log('id already existed')
          else console.log(err.message)
        })
    
})

router.get('/:id', async(req, res) => {
    try {
      const student = await Student.findByPk(req.params.id)
      const campus = await Campus.findOne({where : {id:student.campusId}})
      res.status(200).json({
        student:student,
        campus: campus
      })
    //   res.send(student)
    } catch (error) {
      res.send(error.message)
    }
  }) 

module.exports = router