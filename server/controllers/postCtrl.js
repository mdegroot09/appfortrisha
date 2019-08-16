module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let postsArr = await db.postCtrl.getPosts()

    return res.status(200).send(postsArr)
  },

  createPost: async (req, res) => {
    console.log('req.body:', req.body)
    const db = req.app.get('db')
    // let postsArr = await db.postCtrl.createPost()
    res.sendStatus(200)
  }
}