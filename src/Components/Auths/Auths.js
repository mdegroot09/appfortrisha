import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateShowLogin, updateShowRegister, updateUsername} from '../../redux/reducer'
import GoogleLogin from 'react-google-login';

class Auths extends Component{
  constructor(){
    super()
    this.state = {
      opacity: 0
    }
  }
  
  // componentDidMount = () => {
  //   this.increaseOpacity()
  // }

  increaseOpacity = () => {
    let {opacity} = this.state
    let opacInterval = setInterval(() => {
      if (opacity >= .75){clearInterval(opacInterval)}
      opacity += .025
      this.setState({opacity})
    }, 50);
  }
  
  hideLogin = () => {
    this.props.updateShowLogin(false)
  }

  hideRegister = () => {
    this.props.updateShowRegister(false)
  }

  responseGoogle = (response) => {
    console.log(response);
    this.props.updateUsername(response.w3.ig)
  }
  
  render(){
    console.log('Auth this.props:', this.props)
    let {opacity} = this.state
    let {showLogin, showRegister} = this.props
    if (opacity === 0 && (showLogin || showRegister)){
      this.increaseOpacity()
    } else if (!showLogin && !showRegister && opacity > 0){
      this.setState({opacity: 0})
    }

    return (
      <>
        {this.props.showLogin ? 

          (<div className='auths'>
            <div className='authImg' style={{opacity: `${opacity}`}}></div>
            <div className='authBox'>
              <h1>Login</h1>
              <GoogleLogin
                clientId="559541228663-ejf0eno7ppa01v2ao1iseb7vspgv5i29.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <div className='viewMoreBtn' onClick={this.hideLogin} style={{backgroundColor: 'rgb(195, 195, 195)'}}><span>Cancel</span></div>
            </div>
          </div>)

          : this.props.showRegister ?

          (<div className='auths'>
            <div className='authImg' style={{opacity: `${opacity}`}}></div>
            <div className='authBox'>
              <h1>Register</h1>
              <div className='viewMoreBtn' onClick={this.hideRegister} style={{backgroundColor: 'rgb(195, 195, 195)'}}><span>Cancel</span></div>
            </div>
          </div>)

            : <></>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  const {userID, showLogin, showRegister, username} = state
  return {userID, showLogin, showRegister, username}
}

const mapDispatchToProps = {
  updateShowLogin, updateShowRegister, updateUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Auths);