const db = require('../models')

const index = async (req, res) => {
  const allChatrooms = await db.Chatroom.find({}).populate('messages')
  return res.json(allChatrooms)
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
  create
}