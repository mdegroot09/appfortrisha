import React, {Component} from 'react'

export default class Navbar extends Component {
  showMeScroll = ()  => {
    console.log('scroll:', window.scrollY)
  }

  render(){
    let scrollPos = window.scrollY
    return(
      <div className={scrollPos < 20 ? 'navbar' : 'hello'}>
        <div className='navDiv'>
          <button className='navBtn'>Home</button>
          <button className='navBtn'>About</button>
        </div>
        <img className='navLogo' src="https://clipartion.com/wp-content/uploads/2015/11/circle-clip-art.png" alt=""/>
        <div className='navDiv'>
          <button className='navBtn'>Register</button>
          <button className='navBtn'>Login</button>
        </div>
      </div>
    )
  }
}