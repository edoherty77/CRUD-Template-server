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

const show = async (req, res) => {
  try {
    const foundMessage = await db.Message.findById(req.params.id)
    await res.json(foundMessage)
  } catch(err) {
    console.log(err)
  }
}

const update = async (req, res) => {
  try {
    await db.Message.findByIdAndUpdate(req.params.id, {message: req.body.newMessage}, {new: true})
  } catch(err) {
    console.log(err)
  }
}

const destroy = async (req, res) => {
  try {
    const deletedMessage = await db.Message.findByIdAndDelete(req.params.id)
    const foundChatroom = await db.Chatroom.findOne({messages: deletedMessage._id})
    if(foundChatroom){
      await foundChatroom.messages.remove(deletedMessage)
      await foundChatroom.save()
    }
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
}