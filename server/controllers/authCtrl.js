const bcrypt = require('bcryptjs')

module.exports = {
  registerUser: async (req, res) => {
    let {email, firstName, lastName, password, image} = req.body
    const db = req.app.get('db')
    let userArr = await db.authCtrl.getUser({email})
    let user = userArr[0]
    
    if (!user) {
      console.log('registerUser accessed')
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
  
      let registeredUser = await db.authCtrl.registerUser({email, firstName, lastName, hash, image})
      user = registeredUser[0]
  
      req.session.user = {
        id: user.id,
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname,
        image: user.image
      }
  
      return res.status(201).send(req.session.user)
    } 

    console.log('loginUser accessed')
    const isAuthenticated = bcrypt.compareSync(password, user.hash)
    if (!isAuthenticated){
      return res.status(403).send('Incorrect password')
    }

    req.session.user = {
      id: user.id,
      email: user.email,
      firstName: user.firstname,
      lastName: user.lastname,
      image: user.image
    }
    return res.status(200).send(req.session.user)
  }, 

  loginUser: async (email, password) => {
    console.log('loginUser accessed')
    const db = req.app.get('db')
    let foundUser = await db.authCtrl.getUser({email})
    let user = foundUser[0]

    const isAuthenticated = bcrypt.compareSync(password, user.hash)
    if (!isAuthenticated){
      return res.status(403).send('Incorrect password')
    }

    req.session.user = {
      id: user.id,
      email: user.email,
      firstName: user.firstname,
      lastName: user.lastname,
      image: user.image
    }
    res.status(200).send(req.session.user)
  },

  logout: async (req, res) => {
    req.session.destroy()
    console.log('session ended')
    res.sendStatus(200)
  },

  checkForSession: async (req, res) => {
    res.status(200).send(req.session)
  },

  updateUser: async (req, res) => {
    let {email, firstName, lastName, password, image} = req.body
    let {id} = req.session.user
    const db = req.app.get('db')

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    
    let updatedUser = await db.authCtrl.updateUser({email, firstName, lastName, hash, id, image})
    let user = updatedUser[0]
    
    try {
      req.session.user = {
        id: user.id,
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname,
        image: user.image
      }
      res.status(200).send(req.session.user)
    }
    catch {
      res.status(500).send('Internal server error')
    }
  }
}