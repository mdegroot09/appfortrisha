import React, {Component} from 'react'
import Dots from './Dots'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      scrollY: 0
    }
  }

  showMeScroll = ()  => {
    // console.log('scroll:', window.scrollY)
    let {scrollY} = window
    this.setState({scrollY})
  }

  render(){
    window.onscroll = () => {
      this.showMeScroll()
    } 
    let {scrollY} = this.state
    return(
      <div className={scrollY < 20 ? 'navMainInit' : 'navMainInit navMainScroll'}>
        <div className={scrollY < 20 ? 'navbarInit' : 'navbarInit navbarScroll'}>
          <div className='navDivLeft'>
            <button onClick={this.showMeScroll} className='navBtn'>Home</button>
            <button className='navBtn'>About</button>
          </div>
          {scrollY < 20 ? <Dots/> : ''}
          {/* <img className='navLogo' src="https://clipartion.com/wp-content/uploads/2015/11/circle-clip-art.png" alt=""/> */}
          <div className='navDivRight'>
            <button className='navBtn'>Register</button>
            <button className='navBtn'>Login</button>
          </div>
        </div>
      </div>
    )
  }
}