const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatroomSchema = new Schema({
  name: String,
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
})

const Chatroom = mongoose.model('Chatroom', ChatroomSchema)

module.exports = Chatroom