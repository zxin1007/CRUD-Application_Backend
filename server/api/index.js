const router = require('express').Router()
router.use('/student', require('./student'))

module.exports = router