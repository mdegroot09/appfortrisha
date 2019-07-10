import React, {Component} from 'react'
import {updatePosts} from '../../redux/reducer'
import {connect} from 'react-redux'
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
        <div className='headerDiv'>
          <img className='headerIcon' src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_spacepict10_1484336621-1.png" alt=""/>
          <h1 className='headerTitle'>Simple Joys</h1>
        </div>
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