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
    let {opacity} = this.state
    window.onscroll = () => {
      this.updateScroll()
    } 
    return(
      <div className={'navMainInit'}>
        {/* Hide second navbar background if opacity for navMainInit is at 1 */}
        <div className={'navbarInit'} style={opacity >= 1 ? {backgroundImage: 'linear-gradient(transparent, transparent)'} : {backgroundImage: 'linear-gradient(#131313, #000077, rgb(15, 15, 170))'}}>
          <div className='navDivLeft'>
            <button className='navBtn'>Home</button>
            <button className='navBtn'>About</button>
          </div>
          <Dots/>
          {/* {scrollY === 0 ? <Dots/> : ''} */}
          <img className='navLogo' src="https://i1.wp.com/www.justpinkaboutit.com/wp-content/uploads/2019/04/kisscc0-half-of-a-yellow-sun-computer-icons-sun-icon-5b3dfe2b88c833.0121921515307894195603-1.png?ssl=1" alt=""/>
          <div className='navDivRight'>
            <button className='navBtn'>Register</button>
            <button className='navBtn'>Login</button>
          </div>
        </div>
      </div>
    )
  }
}