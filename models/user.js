const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  chatrooms: [String]
})

//methods that the UserSchema can access
UserSchema.methods = {
  //check that the user's password matches the one in the db
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  // hash a plain text password into a much more secure string that is stored in the db
  hashPassword: function (plainTextPassword) {
    //storing a pw as plaintext is never an option
    const salt = bcrypt.genSaltSync(1)
    return bcrypt.hashSync(plainTextPassword, salt)
  },
}

//use a 'pre' hook that will modify the user before saving them to the db
UserSchema.pre('save', function (next) {
  //if there's no pw
  if (!this.password) {
    //exit the function
    next()
  } else {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next()
    //if there is a pw
    //hash it, add it to the user and THEN save the user
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User