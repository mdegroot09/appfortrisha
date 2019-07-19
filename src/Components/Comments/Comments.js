import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateShowLogin} from '../../redux/reducer'
import moment from 'moment'
import axios from 'axios'

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
    // Get the current date and time
    let date = moment().format()

    let {comments, newComment} = this.state
    this.addCommentToDB(newComment, date)
  
    let comment = {
      id: null,
      firstName: this.props.userFirstName,
      lastName: this.props.userLastName,
      text: newComment,
      date: date
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

  addCommentToDB = (text, date) => {
    let post_id = this.props.match.params.id
    axios.post('/api/createcomment', {text, date, post_id})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  updateNewCommentState = (input) => {
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
              {`${comment.firstName} ${comment.lastName} - ${moment(date).utc().fromNow()}`}
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
          {this.props.userFirstName ?
            <>
              <b className='commentName'>
                {`${this.props.userFirstName} ${this.props.userLastName}`}
              </b>
              <div className='commentInputDiv'>
                <input className='filter commentInput' onChange={(e) => this.updateNewCommentState(e.target.value)} style={{backgroundColor: 'rgb(224, 224, 224)'}} type="text" placeholder={`comment`}/>
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
  const {userFirstName, userLastName} = state
  return {userFirstName, userLastName}
}

const mapDispatchToProps = {
  updateShowLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments))