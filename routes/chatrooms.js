const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.chatrooms.index)
router.post('/', ctrl.chatrooms.create)
router.get('/:id', ctrl.chatrooms.show)

// exports
module.exports = router