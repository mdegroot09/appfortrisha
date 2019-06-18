import React, {Component} from 'react'

export default class Navbar extends Component {
  render(){
    return(
      <>
      <div className='navbar'>
        <div className='navDiv'>
          <button className='navBtn'>Home</button>
          <button className='navBtn'>About</button>
        </div>
        {/* <img className='navLogo' src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg" alt=""/> */}
        <div className='navDiv'>
          <button className='navBtn'>Register</button>
          <button className='navBtn'>Login</button>
        </div>
      </div>
      <div class="wrap">
        <div class="circle">
          <i class="icon i1 icon-terminal"></i>
          <i class="icon i2 icon-code-fork"></i>
          <i class="icon i3 icon-keyboard"></i>
          <i class="icon i4 icon-code"></i>
          <div class="line1"></div>
          <div class="line2"></div>
          <span class="text">hover on me</span>
        </div>
      </div>
      </>
    )
  }
}