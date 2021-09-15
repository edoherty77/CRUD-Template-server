const db = require('../models')

const index = async (req, res) => {
  console.log('index')
  return res.send("yoooo")
}

module.exports = {
  index
}