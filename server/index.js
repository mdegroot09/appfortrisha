require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authCtrl')
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
app.post('/auth/registerUser', authCtrl.registerUser)
app.post('/auth/loginUser', authCtrl.loginUser)
app.delete('/auth/logout', authCtrl.logout)
app.put('/auth/updateUser', authCtrl.updateUser)
app.put('/auth/reset-pass', authCtrl.resetPass)
app.get('/api/session', authCtrl.checkForSession)
app.post('/auth/user',authCtrl.authenticateUser)