const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.chatrooms.index)

// exports
module.exports = router