import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class NewPostLink extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      // {this.props.googleID === }
      <div className='miniPost'>
        <div className='miniPhoto' style={{backgroundImage: `url('https://img1.androidappsapk.co/300/f/b/6/com.wPlusTelegramMessenger.png')`, backgroundPosition: 'center center', backgroundSize: 'cover'}} alt=""></div>
        <h3 className='postTitle'>New Post</h3>
        <p className='postSubTitle'>{new Date().toDateString()}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {googleID} = state
  return {googleID}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPostLink))