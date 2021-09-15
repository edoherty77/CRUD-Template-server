const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.messages.index)
router.post('/', ctrl.messages.create)

// exports
module.exports = router