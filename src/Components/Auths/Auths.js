import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateShowLogin, updateShowRegister} from '../../redux/reducer'

class Auths extends Component{
  hideLogin = () => {
    this.props.updateShowLogin(false)
  }

  hideRegister = () => {
    this.props.updateShowRegister(false)
  }
  
  render(){
    console.log('Auth props:', this.props)
  
    return (
      <>
        {this.props.showLogin ? 

          (<div className='auths'>
            <h1>Login</h1>
            <div className='viewMoreBtn' onClick={this.hideLogin} style={{backgroundColor: 'rgb(195, 195, 195)'}}><span>Cancel</span></div>
          </div>)

          : this.props.showRegister ?

            (<div className='auths'>
              <h1>Register</h1>
              <div className='viewMoreBtn' onClick={this.hideRegister} style={{backgroundColor: 'rgb(195, 195, 195)'}}><span>Cancel</span></div>
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
