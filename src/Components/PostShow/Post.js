import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Comments from '../Comments/Comments';
import {withRouter} from 'react-router-dom';
import moment from 'moment'
import axios from 'axios'

class Post extends Component {
  constructor (){
    super()
    this.state = {
      post: {
        elements: []
      },
      comments: []
    }
  }

  componentDidMount = () => {
    // Bring the scroll to the top of the page on initial render
    window.scrollTo(0, 0)

    let index = this.props.posts.findIndex(post => {
      return post.id === +this.props.match.params.id
    })
    if (this.props.posts[index]){
      this.setState({post: this.props.posts[index]})
    } else {
      console.log('not found')
      axios.get(`/api/getpost/${this.props.match.params.id}`)
      .then(res => {
        console.log('res.data:', res.data)
        let {post} = this.state
        post.title = res.data[0].title
        post.imageMain = res.data[0].imagemain
        post.date = res.data[0].postdatetime
        post.family = res.data[0].family
        post.makeup = res.data[0].makeup
        post.food = res.data[0].food
        post.elements = res.data.map(element => {
          return {
            type: element.elementtype,
            text: element.elementtext,
            url: element.elementurl,
            url2: element.elementurl2,
            quote: element.elementquote,
            person: element.elementperson
          }
        })
        this.setState({post})
      })
    }
  }

  render(){
    let {post} = this.state
    console.log('state:', this.state)
  
    return(
      <div className='homeMainDiv'>
        {/* <Header/> */}
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>{post.title}</h2>
              <h3 style={{margin: '0', fontSize: '20px', color: 'black'}}>
                {post.date 
                  ? moment(new Date(+post.date)).fromNow() 
                  : ''
                }
              </h3>
              <div className='showPost'>
                <div className='mainPhoto' alt="" style={{backgroundPosition: 'center top', backgroundSize: 'cover', width: '150px', height: '150px',
                  backgroundImage: `url(${post.imageMain})`}}>
                </div>                
                <div className='fullPostTextDiv'>
                  <p className='fullPostText'>{post.text}</p>
                </div>
              </div>
            </div>
          </div>
          <Comments comments={this.state.comments}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {posts} = state
  return {
    posts
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))