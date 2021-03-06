const router = require('express').Router()
const { Student, Campus } = require('../database/index')

//listen on localhost:3000/api/student
router.route('/')
.get(async (req, res)=>{ //list all students
    try{
        const student = await Student.findAll();
        console.log(student)
        if (student.length>0){
          res.send(student)
        } else{
          res.send('There are no students registered in the database')
        }
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //add a student

        console.log(req.body)
        await Student.create({
                id:req.body.id,
                campusId:req.body.campusId,
                email:req.body.email,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                gpa:req.body.gpa,
                img:req.body.img
        }).then((student)=>{
          res.json(student)
        }).catch((err)=>{
          if (err.message==='Validation error')res.send('id already existed')
          else res.send(err.message)
        })
    
})

//listen on localhost:3000/api/student/{id}
router.route('/:id')
.get(async(req, res) => { //a signle student view
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
.delete(async(req, res)=>{ //delete a student
    try{
      const student = await Student.findByPk(req.params.id)
      await student.destroy()
    } catch(err){
      res.send(err)
    }
})
.put(async(req, res)=>{ //modify student info
  console.log(req.params.id)
  const data = req.body
  const student = await Student.findByPk(req.params.id)
  for (let key in data){
    console.log(key)
    student.update({[key]:data[key]})
  }
})

module.exports = router
