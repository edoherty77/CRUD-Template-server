const db = require('../models')

const index = async (req, res) => {
  // const foundChatroom = await db.Chatroom.find({})
  // return res.json(allChatrooms)
}

const create = async (req, res) => {
  const data = JSON.parse(req.body.body)
  try {
    const foundChatroom = await db.Chatroom.findById(data.chatroomId)
    const createdMessage = await db.Message.create({message: data.message, username: data.username})
    console.log(createdMessage)
    createdMessage.save()
    foundChatroom.messages.push(createdMessage)
    foundChatroom.save()
    return res.json(createdMessage)
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  index,
  create
}