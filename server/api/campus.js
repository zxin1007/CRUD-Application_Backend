const router = require('express').Router()
const { Campus, Student } = require('../database/index')

//listen on loacalhost:3000/api/campus
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const campus = await Campus.findAll();
        if (campus.length>0){
          res.send(campus)
        } else{
          res.send('There are no campuses registered in the database')
        }
    } catch(err){
        console.log(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add campus

        console.log(req.body)

        await Campus.create({
            id:req.body.id,
            name:req.body.name,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            description:req.body.description,
            img:req.body.img
        }).then(function(campus){
          res.json(campus)
          console.log('successful created')
        }).catch(err=>{
          if (err.message==='Validation error')console.log('id already existed')
          else console.log(err.message)
        })   

})

router.route('/:id') //listen on //listen on loacalhost:3000/api/campus/{id}
.get(async(req, res) => { //single campus view
    try {
      const campus = await Campus.findByPk(req.params.id)
      const student = await Student.findAll({where : {campusId : campus.id}})
      res.status(200).json({
        campus: campus,
        student:student
      })
    } catch (error) {
      res.send(error)
    }
})
.delete(async(req, res)=>{ //delete request base on campus id
  try{
    const campus = await Campus.findByPk(req.params.id)
    await campus.destroy()
  } catch(err){
    console.log(err)
  }
})
.put(async(req, res)=>{ //put requst, modify campus info
  console.log(req.params.id)
  const data = req.body
  const campus = await Campus.findByPk(req.params.id)
  for (let key in data){
    console.log(key)
    switch(key){
      case 'name':
        await campus.update({name:data[key]})
        break;
      case 'img':
        await campus.update({img:data[key]})
        break;
      case 'address':
        await campus.update({address:data[key]})
        break; 
      case 'city':
        await campus.update({city:data[key]})
        break;
      case 'state':
        await campus.update({state:data[key]})
        break;
      case 'zip':
        await campus.update({zip:data[key]})
        break;
      case 'description':
        await campus.update({description:data[key]})
        break;
    }
  }
})

module.exports = router