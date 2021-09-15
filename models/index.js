const mongoose = require('mongoose')
require('dotenv').config()

const connectionString =
  process.env.MONGO_URI || 'mongodb://localhost:27017/chatapp'
const configOptions = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
}

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`))


module.exports = {
  Chatroom: require('./chatroom'),
  Message: require('./message'),
  User: require('./user')
}