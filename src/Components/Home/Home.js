import React, {Component} from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      posts: [
        // testing data
        {
          title: 'Latest Post',
          date: '6/27/19',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus rem, repellendus quas veniam exercitationem repudiandae voluptatum doloribus doloremque mollitia. Rerum vero sunt ad saepe nam aperiam ipsum deserunt quo.',
          family: true,
          makeup: true,
          food: true
        },
        {
          title: 'Sixth Post',
          date: '6/26/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aliquid dolorum, quasi natus alias quidem exercitationem quos commodi aperiam tenetur deserunt officia magni itaque voluptates maxime. Commodi eveniet rerum voluptatibus.',
          family: true,
          makeup: false,
          food: false
        },{
          title: 'Fifth Post',
          date: '6/25/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dignissimos? Culpa quod officiis at nesciunt similique nemo nam repellat sapiente quos porro harum facere, explicabo omnis sint reiciendis facilis recusandae.',
          family: true,
          makeup: true,
          food: true
        },
        {
          title: 'Fourth Post',
          date: '6/24/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi dolore fugiat amet perferendis, doloribus quaerat reprehenderit unde a nostrum deserunt maxime. Voluptatum suscipit nisi vero molestias officiis similique animi.',
          family: true,
          makeup: false,
          food: true
        },
        {
          title: 'Third Post',
          date: '6/23/19',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur, impedit officia ut voluptates modi eos molestiae ducimus corrupti, minima voluptatem quae, repellendus distinctio culpa aliquid in. Labore, hic esse.',
          family: true,
          makeup: true,
          food: true
        },
        {
          title: 'Second Post',
          date: '6/22/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur maiores fugit sapiente doloribus ipsa esse, adipisci ratione quaerat aut incidunt sit asperiores alias, consequatur reiciendis, autem quibusdam iusto dolorum!',
          family: true,
          makeup: false,
          food: true
        },
        {
          title: 'First Post',
          date: '6/21/19',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, harum laudantium magnam natus aliquam, excepturi, cum quaerat asperiores aperiam enim labore. Nobis in dolorum itaque illum odio assumenda nisi aliquid!',
          family: true,
          makeup: false,
          food: true
        }
      ],
      viewMore: false,
      postsMax: 5,
      filter: '',
      activeTab: 'family'
    }
  }

  updateFilter = (value) => {
    let val = value.toLowerCase()
    this.setState({filter: val})
    if (val || this.state.viewMore === true){
      this.setState({viewMore: true})
    } else {
      this.setState({viewMore: false})
    }
  }

  updateActiveTab = (name) => {
    this.setState({activeTab: name})
  }

  render(){
    // Loop through posts and display each
    let tabSpecific = this.state.posts.filter(post => {
      return post[this.state.activeTab]
    })

    let showPostsArr = tabSpecific.filter(post => {
      return (post.title.toLowerCase().includes(this.state.filter) || post.text.toLowerCase().includes(this.state.filter))
      // {
      //   return post
      // } else return
    })

    console.log('showPostsArr:', showPostsArr)
    
    let showPosts = showPostsArr.map((post, i) => {
      // Only display the latest 5 posts 
      if (i > this.state.postsMax - 1 && this.state.viewMore === false){return false}
      let arr = post.text.split('')
      var text
      // Condense post and end with '...' if longer than 226 characters
      if (arr.length > 80){
        let indexStart = 80
        // If the last item in the array is a space or period, begin '...' one index sooner
        while (arr[indexStart - 1] === ' ' || arr[indexStart - 1] === '.') {
          indexStart -= 1
        }
        arr.splice(indexStart, arr.length - indexStart, '...')
        text = arr.join('')
      } else {
        text = post.text
      }
      return (
        <div className='miniPost' key={i}>
          {i % 2 !== 0 ? <img className='miniPhoto' src="https://cdn.pixabay.com/photo/2013/11/28/09/57/sky-219769_960_720.jpg" alt=""/> : <></>}
          <div className='postDiv'>
            <h4 className='postTitle' style={i % 2 !== 0 ? {alignSelf: 'flex-end'} : {}} onClick={() => console.log(`"${post.title}" clicked`)}>{post.title} - {post.date}</h4>
            <div className='postTextDiv'>
              <p className='postText' style={i % 2 !== 0 ? {textAlign: 'end'} : {}}>{text}</p>
            </div>
          </div>
          {i % 2 === 0 ? <img className='miniPhoto miniPhotoRight' src="https://cdn.pixabay.com/photo/2013/11/28/09/57/sky-219769_960_720.jpg" alt=""/> : <></>}
        </div>
      )
    })

    console.log('showPosts:', showPosts)

    return(
      <div className='homeMainDiv'>
        <div className='headerDiv'>
          <img className='headerIcon' src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_spacepict10_1484336621-1.png" alt=""/>
          {/* <img className='headerIcon' src="https://i1.wp.com/www.justpinkaboutit.com/wp-content/uploads/2019/04/kisscc0-half-of-a-yellow-sun-computer-icons-sun-icon-5b3dfe2b88c833.0121921515307894195603-1.png?ssl=1" alt=""/> */}
          <h1 className='headerTitle'>Simple Joys</h1>
        </div>
        <div className='tabs'>
          <button className={`homeTab ${this.state.activeTab === 'family' ? 'familyActive' : 'family'}`} 
            onClick={() => this.updateActiveTab('family')}>Family</button>
          <button className={`homeTab ${this.state.activeTab === 'makeup' ? 'makeupActive' : (this.state.activeTab === 'family' ? 'makeupFamilyActive' : 'makeupFoodActive')}`} 
            onClick={() => this.updateActiveTab('makeup')}>Makeup</button>
          <button className={`homeTab ${this.state.activeTab === 'food' ? 'foodActive' : 'food'}`} 
            onClick={() => this.updateActiveTab('food')}>Food</button>
        </div>
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>Posts</h2>
              <input onChange={(e) => this.updateFilter(e.target.value)} className='filter' type="text" placeholder='search'/>
              <div className='showPosts'>
                {showPosts}
                {!this.state.filter && tabSpecific.length > this.state.postsMax?
                  (!this.state.viewMore ? 
                    <button className='viewMoreBtn' onClick={() => this.setState({viewMore: true})}>View All</button> 
                    : <button className='viewMoreBtn' onClick={() => this.setState({viewMore: false})}>View Less</button>)
                      : <></>
                }
              </div>
            </div>
          </div>
          <div className='homeRight'>
            <h2 className='sectionTitle'>About</h2>
          </div>
        </div>
      </div>
    )
  }
}