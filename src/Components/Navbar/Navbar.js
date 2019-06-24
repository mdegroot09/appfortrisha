import React, {Component} from 'react'
import Dots from './Dots'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount = () => {
    this.setState({scrollY: window.scrollY})
  }

  updateScroll = ()  => {
    let {scrollY} = window

    // fire change background only when changing to or from scrollY === 0
    if ((scrollY === 0 && this.state.scrollY > 0) || (scrollY > 0 && this.state.scrollY === 0)){
      this.changeBackground(scrollY)
    }
    this.setState({scrollY})
  }

  changeBackground = (scrollY) => {
    console.log('scrollY:', scrollY)
    if (scrollY === 0){
      let opacity = 0
      let increase = (opacity) => {
        setTimeout(() => {
          opacity += .01
          document.getElementsByClassName('navMainInit')[0].style.backgroundImage = `linear-gradient(rgba(19,19,19,${opacity}), rgba(0,0,119,${opacity}), rgba(15,15,170,${opacity}))`
          if(opacity >= 1){return}
          console.log('opacity:', opacity)
          increase(opacity)
        }, 5);
      }
      increase(opacity)
    } else {
      document.getElementsByClassName('navMainInit')[0].style.backgroundImage = 'linear-gradient(transparent, transparent)'
    }
  }

  render(){
    let {scrollY} = this.state
    window.onscroll = () => {
      for (var i = 1; i < 5000; i++){
        window.clearTimeout(i);
      }
      this.updateScroll()
    } 
    return(
      <div className={'navMainInit'}>
        <div className={scrollY === 0 ? 'navbarInit' : 'navbarInit navbarScroll'}>
          <div className='navDivLeft'>
            <button onClick={this.showMeScroll} className='navBtn'>Home</button>
            <button className='navBtn'>About</button>
          </div>
          <Dots/>
          {/* {scrollY === 0 ? <Dots/> : ''} */}
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