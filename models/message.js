const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  text: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  }
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message