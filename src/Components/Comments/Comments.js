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
    let comments = commentsInit.map((comment, i) => {
      return (
        <div key={i} className='comment'>
          <b className='commentName'>
            {`${comment.firstName} ${comment.lastName} - ${comment.date}`}
          </b>
          <div className='commentText'>
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
        <div className='comment'>
          <b className='commentName'>
            {`Username - Today`}
          </b>
          <div style={{marginLeft: `20px`}}>
            <input className='filter' style={{backgroundColor: 'rgb(224, 224, 224)'}} type="text" placeholder={`comment`}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Comments)