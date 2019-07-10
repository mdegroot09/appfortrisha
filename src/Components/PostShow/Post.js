import React, {Component} from 'react'
import {updatePosts} from '../../redux/reducer'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Comments from '../Comments/Comments';

class Post extends Component {
  componentDidMount = () => {
    // Bring the scroll to the top of the page on initial render
    window.scrollTo(0, 0)
  }

  render(){
    let index = this.props.posts.findIndex(post => {
      return post.id === +this.props.match.params.id
    })
    let post = this.props.posts[index]
  
    return(
      <div className='homeMainDiv'>
        <Header/>
        <div className='postBuffer'></div>
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>{post.title}</h2>
              <h3 className='sectionTitle' style={{margin: '0'}}>{post.date}</h3>
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
          <Comments comments={post.comments}/>
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
  updatePosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)