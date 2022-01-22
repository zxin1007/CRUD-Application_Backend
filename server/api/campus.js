const router = require('express').Router()
const { Campus, Student } = require('../database/index')

router.route('/')
.get(async (req, res)=>{
    try{
        const campus = await Campus.findAll();
        res.send(campus)
    } catch(err){
        console.log(err)
    }
})
.post(async(req, res)=>{
    try{
        console.log(req.body)
        const newCampus = await Campus.create({
            id:req.body.id,
            name:req.body.name,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            description:req.body.description,
            img:req.body.img
        })
        res.json(newCampus)
    } catch(err){
        console.log(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
      const campus = await Campus.findByPk(req.params.id)
      const student = await Student.findAll({where : {campusId : campus.id}})
      res.status(200).json({
        campus: campus,
        student:student
      })
    //   res.send(campus)
    //   console.log(student)
    } catch (error) {
      res.send(error)
    }
  }) 

module.exports = router