module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    let postsArr = await db.postCtrl.getPosts()

    return res.status(200).send(postsArr)
  },

  createPost: async (req, res) => {
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

    createElement = (i) => {
      let {type, text, quote, person, url, url2} = elements[i]
      if (!text) {text = ''} 
      if (!quote) {quote = ''}
      if (!person) {person = ''}
      if (!url) {url = ''}
      if (!url2) {url2 = ''}
      db.postCtrl.createElement({type, text, quote, person, url, url2, post_id})
      .then(e => {
        if (i + 1 < elements.length){
          createElement(i + 1)
        } else return
      })
      .catch(err => {
        res.sendStatus(err)
      })
    }

    createElement(0)
    
    res.status(201).send({post_id})
  }
}