var express = require('express')
var app = express()
var cors = require('cors')
var routes = require('./routes')

app.use(cors())

app.use('/api/v1', routes.chatrooms)


app.listen(4000, () => {
    console.log("app is listening on port 4000")
})