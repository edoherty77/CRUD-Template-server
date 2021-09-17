const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.messages.index)
router.get('/:id', ctrl.messages.show)
router.post('/', ctrl.messages.create)
router.put('/:id', ctrl.messages.update)
router.delete('/:id', ctrl.messages.destroy)

// exports
module.exports = router