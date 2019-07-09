import React, {Component} from 'react'
import {updatePosts} from '../../redux/reducer'
import {connect} from 'react-redux'

class Post extends Component {
  render(){
    let index = this.props.posts.findIndex(post => {
      return post.id === +this.props.match.params.id
    })
    console.log('Post props:', this.props)
    let post = this.props.posts[index]
  
    return (
      <div className='homeMainDiv'>
        <h1>{post.title}</h1>
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