const router = require('express').Router()
const { Student, Campus } = require('../database/index')

router.route('/')
.get(async (req, res)=>{
    try{
        const student = await Student.findAll();
        console.log(student)
        if (student.length>0){
          res.send(student)
        } else{
          res.send('There are no students registered in the database')
        }
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
        }).then((student)=>{
          res.json(student)
        }).catch((err)=>{
          if (err.message==='Validation error')console.log('id already existed')
          else console.log(err.message)
        })
    
})

router.route('/:id')
.get(async(req, res) => {
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
.delete(async(req, res)=>{
    try{
      const student = await Student.findByPk(req.params.id)
      await student.destroy()
    } catch(err){
      console.log(err)
    }
})
.put(async(req, res)=>{
  console.log(req.params.id)
  const data = req.body
  const student = await Student.findByPk(req.params.id)
  for (let key in data){
    console.log(key)
    switch(key){
      case 'firstName':
        await student.update({firstName:data[key]})
        break;
      case 'lastName':
        await student.update({lastName:data[key]})
        break;
      case 'email':
        await student.update({email:data[key]})
        break; 
      case 'img':
        await student.update({img:data[key]})
        break;
      case 'gpa':
        await student.update({gpa:data[key]})
        break;
      case 'campusId':
        try{
          await student.update({campusId:data[key]})
        } catch(err){
          console.log(err)
        }
        break;
    }
  }
})

module.exports = router