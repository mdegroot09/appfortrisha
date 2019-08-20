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

    elements.map(async (element) => {
      let {type, text, quote, person, url, url2} = element
      if (!text) {text = ''} 
      if (!quote) {quote = ''}
      if (!person) {person = ''}
      if (!person) {person = ''}
      if (!url) {url = ''}
      if (!url2) {url2 = ''}
      return await db.postCtrl.createElement({type, text, quote, person, url, url2, post_id})
    })
    
    res.sendStatus(200)
  }
}