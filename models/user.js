const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  chatrooms: [String]
})

const User = mongoose.model('User', UserSchema)

module.exports = User