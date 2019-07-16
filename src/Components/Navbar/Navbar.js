import React, {Component} from 'react'
import Dots from './Dots'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateShowLogin, updateShowRegister} from '../../redux/reducer';

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      scrollY: 0,
      opacity: 1
    }
    this.timerIncrease = null
    this.timerDecrease = null
    this.spinImg = null
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

  startSpin = () => {
    if (!this.spinImg){
      let navLogo = document.getElementsByClassName('navLogo')[0]
      navLogo.style.transition = 'transform 4s'
      navLogo.style.transform = 'rotate(540deg)'
      this.spinImg = setTimeout(() => {
        navLogo.style.transition = ''
        navLogo.style.transform = ''
        this.spinImg = null
      }, 4000);
    }
  }

  resetSpinImg = () => {
    let navLogo = document.getElementsByClassName('navLogo')[0]
    navLogo.style.transition = ''
    navLogo.style.transform = ''
    this.spinImg = null
  }

  showHideMenu = () => {
    let hideMenu = document.getElementsByClassName('hideMenu')[0]
    let showMenu = document.getElementsByClassName('showMenu')[0]
    let homeMainDiv = document.getElementsByClassName('homeMainDiv')[0]
    if (hideMenu){
      hideMenu.className = 'navMainInit showMenu'
      homeMainDiv.style.zIndex = -2
    } else {
      showMenu.className = 'navMainInit hideMenu'
      setTimeout(() => {
        homeMainDiv.style.zIndex = 0
      }, 250);
    }
  }

  showHideLogin = (bool, showHideMenu) => {
    if (showHideMenu){
      this.showHideMenu()
    }
    this.props.updateShowLogin(bool)
    this.props.updateShowRegister(!bool)
  }

  showHideRegister = (bool, showHideMenu) => {
    if (showHideMenu){
      this.showHideMenu()
    }
    this.props.updateShowRegister(bool)
    this.props.updateShowLogin(!bool)
  }

  render(){

    let {opacity} = this.state
    window.onscroll = () => {
      this.updateScroll()
    } 
    return(
      <div className='navMainParent'>
        <div className={'navMainInit'}>

          {/* Hide second navbar background if opacity for navMainInit is at 1 */}
          <div className={'navbarInit'} style={opacity >= 1 ? {backgroundImage: 'linear-gradient(transparent, transparent)'} : {backgroundImage: 'linear-gradient(#131313, #000077, rgb(15, 15, 170))'}}>
            <div className='navDivLeft'>
              <Link to='/'>
                <button className='navBtn'>Home</button>
              </Link>
              <Link to='/about'>
                <button className='navBtn'>About</button>
              </Link>
              
              {/* Hamburger Button */}
              <button onClick={this.showHideMenu} className='hamburgerBtn'>
                <img className='hamburger' src="https://cdn.onlinewebfonts.com/svg/img_53100.png" alt=""/>
              </button>
            </div>
            <Dots 
              resetSpinImg={this.resetSpinImg}
              startSpin={this.startSpin}
            />
            <img className='navLogo' 
              style={{height: '200%'}} 
              src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_spacepict10_1484336621-1.png" alt=""/>
            <div className='navLogo'>
              <h3 className='navTitle'>Simple Joys</h3>
            </div>
            <div className='navDivRight'>
              {this.props.username 
                ? 
                  <>
                    <button className='navBtnHB'>Welcome, {this.props.username}</button>
                    <button className='navBtnHB'>Logout</button>
                  </>
                : 
                  <>
                    <button className='navBtnHB' onClick={() => this.showHideLogin(true, true)}>Login</button>
                    <button className='navBtnHB' onClick={() => this.showHideRegister(true, true)}>Register</button>
                  </>
              }
            </div>
          </div>
        </div>
        <div className={`navMainInit hideMenu`} >
          <Link to='/'>
            <button className='navBtnHB' onClick={this.showHideMenu}>Home</button>
          </Link>
          <Link to='/about'>
            <button className='navBtnHB' onClick={this.showHideMenu}>About</button>
          </Link>
          {this.props.username 
            ? 
              <>
                <button className='navBtnHB'>Welcome, {this.props.username}</button>
                <button className='navBtnHB'>Logout</button>
              </>
            : 
              <>
                <button className='navBtnHB' onClick={() => this.showHideLogin(true, true)}>Login</button>
                <button className='navBtnHB' onClick={() => this.showHideRegister(true, true)}>Register</button>
              </>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {username} = state
  return {username}
}

const mapDispatchToProps = {
  updateShowLogin, updateShowRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)