import React, {Component} from 'react'
import Dots from './Dots'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      scrollY: 0,
      opacity: 1
    }
    this.timerIncrease = null
    this.timerDecrease = null
  }

  componentDidMount = () => {
    let {scrollY} = window
    let opacity = 0
    if (scrollY > 0){
      opacity = 0
    } else {
      opacity = 1
    }
    document.getElementsByClassName('navMainInit')[0].style.backgroundImage = `linear-gradient(rgba(19,19,19,${opacity}), rgba(0,0,119,${opacity}), rgba(15,15,170,${opacity}))`
    this.setState({scrollY, opacity})
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
    var opacity = this.state.opacity
    if (scrollY <= 0){
      console.log('scrollY === 0')
      window.clearTimeout(this.timerDecrease)
      let increase = (opacity) => {
        this.timerIncrease = setTimeout(() => {
          opacity += .02
          document.getElementsByClassName('navMainInit')[0].style.backgroundImage = `linear-gradient(rgba(19,19,19,${opacity}), rgba(0,0,119,${opacity}), rgba(15,15,170,${opacity}))`
          this.setState({opacity})
          if(opacity >= 1){return}
          increase(opacity)
        }, .01);
      }
      increase(opacity)
    } else {
      console.log('scrollY > 0; opacity:', opacity)
      window.clearTimeout(this.timerIncrease)
      let decrease = (opacity) => {
        this.timerDecrease = setTimeout(() => {
          opacity -= .02
          document.getElementsByClassName('navMainInit')[0].style.backgroundImage = `linear-gradient(rgba(19,19,19,${opacity}), rgba(0,0,119,${opacity}), rgba(15,15,170,${opacity}))`
          this.setState({opacity})
          if(opacity <= 0){return}
          decrease(opacity)
        }, .01);
      }
      decrease(opacity)
    }
  }

  render(){
    let {scrollY} = this.state
    window.onscroll = () => {
      this.updateScroll()
    } 
    return(
      <div className={'navMainInit'}>
        <div className={'navbarInit navbarScroll'}>
        {/* <div className={scrollY === 0 ? 'navbarInit' : 'navbarInit navbarScroll'}> */}
          <div className='navDivLeft'>
            <button onClick={() => console.log('scrollY:', window.scrollY)} className='navBtn'>Home</button>
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