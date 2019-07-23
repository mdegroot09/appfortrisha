require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authCtrl')
const postCtrl = require('./controllers/postCtrl')
const commentCtrl = require('./controllers/commentCtrl')
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.static(`${__dirname}/../build`))

app.use(express.json())

// Initiate user session
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))

// Connect server to database
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log('Listening on port:', SERVER_PORT)
  })
})

// Auth Controller
app.post('/auth/register', authCtrl.registerUser)
app.post('/auth/login', authCtrl.loginUser)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/session', authCtrl.checkForSession)
app.put('/auth/update', authCtrl.updateUser)
app.post('/auth/checkID', authCtrl.isAdmin)

// Posts Controller
app.get('/api/getposts', postCtrl.getPosts)

// Comments Controller
app.post('/api/createcomment', commentCtrl.createComment)