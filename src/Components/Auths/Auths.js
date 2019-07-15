import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateShowLogin, updateShowRegister} from '../../redux/reducer'

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
      opacity += .01
      this.setState({opacity})
    }, 8);
  }
  
  hideLogin = () => {
    this.props.updateShowLogin(false)
  }

  hideRegister = () => {
    this.props.updateShowRegister(false)
  }
  
  render(){
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
  const {userID, showLogin, showRegister} = state
  return {userID, showLogin, showRegister}
}

const mapDispatchToProps = {
  updateShowLogin, updateShowRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Auths);
