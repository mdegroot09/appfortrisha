import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateShowLogin} from '../../redux/reducer'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      comments: [],
      commentElements: '',
      newComment: ''
    }
  }

  componentDidMount = () => {
    if (this.props.comments){
      this.setState({comments: this.props.comments})
    }
    setTimeout(() => {
      this.renderComments()
    }, 1);
  }

  addComment = () => {
    let {comments, newComment} = this.state
    let comment = {
      id: null,
      firstName: 'Username',
      lastName: '',
      text: newComment,
      date: 'Today'
    }
    comments.push(comment)
    this.setState({comments})
    this.setState({newComment: ''})
    setTimeout(() => {
      this.renderComments()
      let commentInput = document.getElementsByClassName('commentInput')[0]
      commentInput.value = ''
      this.setState({newComment: ''})
    }, 1);
  }

  updateNewComment = (input) => {
    this.setState({newComment: input})
  }

  renderComments = () => {
    // Skip mapping if comments don't exist for a post
    try {
      let commentElements = this.state.comments.map((comment, i) => {
        let date = new Date(comment.date.replace(' ', 'T'))
        return (
          <div key={i} className='comment'>
            <b className='commentName'>
              {`${comment.firstName} ${comment.lastName} - ${date.toDateString()}`}
            </b>
            <div className='commentText'>
              {comment.text}
            </div>
          </div>
        )
      })
      this.setState({commentElements})
    }
    catch {return}
  }

  login = () => {
    this.props.updateShowLogin(true)
  }
  
  render(){
    let {commentElements} = this.state

    return (
      <div className='homeRight'>
        <h2 className='sectionTitle'>Comments</h2>
        {commentElements[0] ? commentElements : ''}
        <div className='comment'>
          {this.props.username ?
            <>
              <b className='commentName'>
                {`Username - Today`}
              </b>
              <div className='commentInputDiv'>
                <input className='filter commentInput' onChange={(e) => this.updateNewComment(e.target.value)} style={{backgroundColor: 'rgb(224, 224, 224)'}} type="text" placeholder={`comment`}/>
                <div className='commentBtnDiv'>
                  <div className='viewMoreBtn commentBtn' onClick={this.addComment}>Post</div>
                </div>
              </div>
            </>
            :
            <div className='viewMoreBtn commentBtnAuth' onClick={this.login}>Login to Comment</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {username} = state
  return {username}
}

const mapDispatchToProps = {
  updateShowLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments))