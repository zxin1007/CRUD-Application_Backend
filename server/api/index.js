const router = require('express').Router()
router.use('/student', require('./student'))
router.use('/campus', require('./campus'))

module.exports = router