import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateShowLogin, updateShowRegister, updateUsername} from '../../redux/reducer'
import GoogleLogin from 'react-google-login';
import axios from 'axios'

class Auths extends Component{
  constructor(){
    super()
    this.state = {
      opacity: 0
    }
  }
  
  componentDidMount = () => {
    setTimeout(() => {
      axios.post('/auth/register', {email: 'mdegroot09@gmail.com', firstName: '', lastName: '', password: '112442799524983760430', image: ''})
      .then(res => console.log('res:', res))
      .catch(err => console.log('err:', err));
    }, 5000)
  }

  increaseOpacity = () => {
    let {opacity} = this.state
    let opacInterval = setInterval(() => {
      if (opacity >= .75){clearInterval(opacInterval)}
      opacity += .05
      this.setState({opacity})
    }, 15);
  }
  
  hideAuth = () => {
    this.props.updateShowLogin(false)
    this.props.updateShowRegister(false)
  }

  responseGoogle = (response) => {
    this.hideAuth()
    let user = {
      firstName: response.w3.ofa, 
      lastName: response.w3.wea, 
      email: response.w3.U3,
      password: response.googleId,
      image: response.w3.Paa
    }
    console.log('user:', user)
    axios.post(`/auth/register`, user)
    .then(res => {
      console.log('res:', res)
    })
    .catch(err => console.log('err:', err))
    this.props.updateUsername(response.w3.ofa)
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
        {this.props.showLogin || this.props.showRegister ? 

          (<div className='auths'>
            <div className='authImg' style={{opacity: `${opacity}`}}></div>
            <div className='authBox'>
              {this.props.showLogin ? <h1>Login</h1> : <h1>Register</h1>}
              <GoogleLogin
                clientId="559541228663-ejf0eno7ppa01v2ao1iseb7vspgv5i29.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <div className='viewMoreBtn' onClick={() => this.hideAuth()} style={{backgroundColor: 'rgb(195, 195, 195)'}}><p>Cancel</p></div>
            </div>
          </div>)
            : <></>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  const {showLogin, showRegister, username} = state
  return {showLogin, showRegister, username}
}

const mapDispatchToProps = {
  updateShowLogin, updateShowRegister, updateUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Auths);
