import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

class NewPostLink extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      // {this.props.googleID === }
      <Link to='/newpost' className='miniPost' style={{justifyContent: 'center'}}>
        <div className='miniPhoto' style={{backgroundImage: `url('https://img1.androidappsapk.co/300/f/b/6/com.wPlusTelegramMessenger.png')`, backgroundPosition: 'center center', backgroundSize: 'cover'}} alt=""></div>
        {/* <h3 className='postTitle' style={{alignSelf: 'center'}}>New Post</h3> */}
      </Link>
    )
  }
}

const mapStateToProps = state => {
  const {googleID} = state
  return {googleID}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPostLink))