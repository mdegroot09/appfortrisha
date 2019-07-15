import React, {Component} from 'react';
import {connect} from 'react-redux'

class Auths extends Component{
  render(){
    console.log('Auth props:', this.props)
  
    return (
      <>
        {this.props.showLogin ? 

          (<div className='auths'>
            <h1>Login</h1>
          </div>)

          : this.props.showRegister ?

            (<div className='auths'>
              <h1>Register</h1>
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(Auths);
