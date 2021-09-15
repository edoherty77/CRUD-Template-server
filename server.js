var express = require('express')
var app = express()
var cors = require('cors')
var routes = require('./routes')
var mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
require('dotenv').config({ path: '.env' })

// middleware - JSON parsing
app.use(express.json())

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({origin: "*"}))

app.use(
    session({
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/chatapp',
      }),
      secret: 'chatapp',
      resave: false, // will not resave sessions
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    }),
  )

//middleware - passport config
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1', routes.chatrooms)
app.use('/api/v1/auth', routes.auth)

//connection
app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`),
)   