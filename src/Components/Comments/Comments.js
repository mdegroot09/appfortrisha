import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      comments: ''
    }
  }

  componentDidMount = () => {
    this.renderComments()
  }

  renderComments = () => {
    let commentsInit = [...this.props.comments]
    let commentsParents = commentsInit.filter((comment, i) => {
      if (!comment.parentComment){
        commentsInit.splice(i, 1)
        return comment
      } else return false
    })
    // Reverse array to get reverse chronological order
    commentsInit.reverse()
    for (let i = 0; i < commentsInit.length; i++){
        let index = commentsParents.findIndex(comment => comment.id === commentsInit[i].parentComment)
        commentsParents.splice(index + 1, 0, commentsInit[i])
    }
    let comments = commentsParents.map((comment, i) => {
      return (
        <div key={i} className={`${!comment.parentComment ? 'comment' : 'comment reply'}`}>
          <b className={`${!comment.parentComment ? 'commentName' : 'replyName'}`}>
            {`${comment.firstName} ${comment.lastName} - ${comment.date}`}
          </b>
          <div style={{marginLeft: `20px`}}>
            {comment.text}
          </div>
        </div>
      )
    })
    this.setState({comments})
  }
  
  render(){
    let {comments} = this.state

    return (
      <div className='homeRight'>
        <h2 className='sectionTitle'>Comments</h2>
        {comments}
      </div>
    )
  }
}

export default withRouter(Comments)