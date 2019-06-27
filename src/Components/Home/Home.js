import React, {Component} from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      posts: [
        {
          title: 'Latest Post',
          date: '6/27/19',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus rem, repellendus quas veniam exercitationem repudiandae voluptatum doloribus doloremque mollitia. Rerum vero sunt ad saepe nam aperiam ipsum deserunt quo.'
        },
        {
          title: 'Fourth Post',
          date: '6/26/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi dolore fugiat amet perferendis, doloribus quaerat reprehenderit unde a nostrum deserunt maxime. Voluptatum suscipit nisi vero molestias officiis similique animi.'
        },
        {
          title: 'Third Post',
          date: '6/24/19',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur, impedit officia ut voluptates modi eos molestiae ducimus corrupti, minima voluptatem quae, repellendus distinctio culpa aliquid in. Labore, hic esse.'
        },
        {
          title: 'Second Post',
          date: '6/23/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur maiores fugit sapiente doloribus ipsa esse, adipisci ratione quaerat aut incidunt sit asperiores alias, consequatur reiciendis, autem quibusdam iusto dolorum!'
        },
        {
          title: 'First Post',
          date: '6/21/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, harum laudantium magnam natus aliquam, excepturi, cum quaerat asperiores aperiam enim labore. Nobis in dolorum itaque illum odio assumenda nisi aliquid!'
        }
      ]
    }
  }

  render(){
    let showPosts = this.state.posts.map((post, i) => {
      return (
        <div className='postDiv' key={i}>
          <h4 className='postTitle'>{post.title} - {post.date}</h4>
          <p className='postText'>{post.text}</p>
        </div>
      )
    })
    return(
      <div className='homeMainDiv'>
        <div className='headerDiv'>
          <img className='headerIcon' src="https://i1.wp.com/www.justpinkaboutit.com/wp-content/uploads/2019/04/kisscc0-half-of-a-yellow-sun-computer-icons-sun-icon-5b3dfe2b88c833.0121921515307894195603-1.png?ssl=1" alt=""/>
          <h1 className='headerTitle'>Simple Joys</h1>
        </div>
        <div className='tabs'>
          <button className='homeTab homeTabLeft'>Family</button>
          <button className='homeTab'>Makeup</button>
          <button className='homeTab homeTabRight'>Food</button>
        </div>
        <div className='homeTrioDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2>Posts</h2>
              <input className='filter' type="text" placeholder='filter'/>
              <div className='showPosts'>
                {showPosts}
              </div>
            </div>
          </div>
          <div className='homeRight'>
            <h2>About</h2>
          </div>
        </div>
      </div>
    )
  }
}