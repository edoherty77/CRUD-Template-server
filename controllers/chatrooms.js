const db = require('../models')

const index = async (req, res) => {
  const allChatrooms = await db.Chatroom.find({}).populate('messages')
  return res.json(allChatrooms)
}

const show = async (req, res) => {
  const roomId = req.params.id
  try {
    const foundChatroom = await db.Chatroom.findOne({id: roomId}).populate('messages')
    return res.json(foundChatroom)
  } catch(err) {
    console.log(err)
  }
}

const create = async (req, res) => {
  try {
    const createdChatroom = await db.Chatroom.create(req.body.body)
    await createdChatroom.save()
    return res.json(createdChatroom)
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  index,
  create,
  show
}