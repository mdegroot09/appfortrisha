import React, {Component} from 'react'

export default class Comments extends Component {
  render(){
    let commentsInit = [...this.props.comments]
    let commentsParents = commentsInit.filter((comment, i) => {
      if (!comment.parentComment){
        commentsInit.splice(i, 1)
        return comment
      } else return false
    })
    // Reverse array to get reverse chronological order
    commentsInit.reverse()
    commentsInit.map((comment, i) => {
      let index = commentsParents.findIndex(comment => comment.id === comment.id)
      commentsParents.splice(index + 1, 0, comment)
      i -= 1
      return
    })
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

    return (
      <div className='homeRight'>
        <h2 className='sectionTitle'>Comments</h2>
        {comments}
      </div>
    )
  }
}