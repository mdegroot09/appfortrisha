module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let postsArr = await db.postCtrl.getPosts()

    return res.status(200).send(postsArr)
  },

  createPost: async (req, res) => {
    console.log('req.body:', req.body, 'typeof:', typeof(req.body.family))
    let {postTitle, imageMain, date, family, makeup, food, elements} = req.body
    let textArr = elements.map(element => {
      if (element.text){
        return element.text + ' '
      } else {
        return ''
      }
    })
    let text = textArr.join('').trim()

    const db = req.app.get('db')
    let postsArr = await db.postCtrl.createPost({postTitle, family, makeup, food, date, imageMain, text})
    let post_id = postsArr[0].id
    console.log('post_id:', post_id)

    
    res.sendStatus(200)
  }
}