import React, {Component} from 'react'
import {updatePosts} from '../../redux/reducer'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Comments from '../Comments/Comments';
import {withRouter} from 'react-router-dom';
import moment from 'moment'

class Post extends Component {
  constructor (){
    super()
    this.state = {
      post: {
        elements: [],
        date: `0000000000000`
      },
      comments: [],
      index: 0
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
    }
  }

  render(){
    let index = this.props.posts.findIndex(post => {
      return post.id === +this.props.match.params.id
    })
    // let post = this.props.posts[index]
    let {post} = this.state
    // var date = new Date(+post.date)
    var date = new Date(+this.state.post.date)
  
    return(
      <div className='homeMainDiv'>
        {/* <Header/> */}
        <div className='postDivider'></div>
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>{post.title}</h2>
              <h3 style={{margin: '0', fontSize: '25px', color: 'black'}}>{moment(date).fromNow()}</h3>
              <div className='showPost'>
                <div className='mainPhoto' alt="" style={{backgroundPosition: 'center top', backgroundSize: 'cover', width: '150px', height: '150px',
                  backgroundImage: `url(${post.imageMain})`}}>
                </div>                
                <div className='fullPostTextDiv'>
                  <p className='fullPostText'>{post.text}</p>
                  {/* <div className='reactions'>
                    <img className='reaction makeGray2' src="https://www.searchpng.com/wp-content/uploads/2019/02/Heart-icon-PNG-715x715.png" alt=""/>
                    <img className='reaction makeGray1' src="https://png.pngtree.com/svg/20170321/laugh_and_cry_703820.png" alt=""/>
                    <img className='reaction makeGray1' src="https://static.thenounproject.com/png/2345410-200.png" alt=""/>
                    <img className='reaction makeGray2' src="http://cdn.onlinewebfonts.com/svg/img_506076.png" alt=""/>
                  </div> */}
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
  updatePosts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))