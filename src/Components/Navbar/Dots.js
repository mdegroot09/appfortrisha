import React, {Component} from 'react'
import ShowingDots from './ShowingDots'
import HidingDots from './HidingDots';

export default class Dots extends Component {
  constructor(){
    super()
    this.state = {
      left: 20,
      navStraightWidth: 0,
      widthDotCount: 0,
      dotsArr: [
       'dotLeft1', 'dotLeft2', 'dotLeft3', 'dotLeft4', 'dotLeft5', 'dotLeft6', 'dotLeft7', 'dotLeft8', 'dotLeft9', 'dotLeft10', 'dotLeft11', 'dotLeft12', 'dotLeft13', 'dotLeft14', 'dotLeft15', 'dotLeft16', 'dotLeft17', 'dotLeft18', 'dotLeft19', 'dotLeft20', 'dotLeft21', 'dotLeft22', 'dotLeft23', 'dotLeft24', 'dotLeft25', 'dotLeft26', 'dotLeft27', 'dotLeft28', 'dotLeft29', 'dotLeft30', 'dotLeft31', 'dotLeft32', 'dotLeft33', 'dotLeft34', 'dotLeft35', 'dotLeft36', 'dotLeft37', 'dotLeft38'
      ],
      topActive: true
    }
  }

  componentDidMount = () => {
    this.resetNavWidth()
  }

  // reset navWidth and dots animation anytime window width changes
  resetNavWidth = () => {
    let navbarInit = document.getElementsByClassName('navbarInit')[0]
    let navStraightWidth = Math.floor(+navbarInit.offsetWidth - ((20 * 2) + 6))
    this.setState({navStraightWidth})
    this.setWidthDotCount(navStraightWidth)
    this.animDots()
  }

  // calculates number of dots for top and bottom based on window width
  setWidthDotCount = (navStraightWidth) => {
    let widthDotCount = (navStraightWidth - 1) / 2
    this.setState({widthDotCount})
  }

  // start an interval for animating dots
  animDots = () => {
    setInterval(() => { 
      var {widthDotCount} = this.state
      var {dotsArr} = this.state

      // whichever of the following is truthy is the current location of the last of dotsArr 
      let lastArrLeft = parseInt(dotsArr[37].split('dotLeft')[1])
      let lastArrTop = parseInt(dotsArr[37].split('dotTop')[1])
      let lastArrRight = parseInt(dotsArr[37].split('dotRight')[1])
      let lastArrBottom = parseInt(dotsArr[37].split('dotBottom')[1])
      let lastArrMidRight = parseInt(dotsArr[37].split('dotMidRight')[1])
      let lastArrMidLeft = parseInt(dotsArr[37].split('dotMidLeft')[1])

      // add next dot to array depending on previous last dot location
      if (lastArrLeft){
        if (lastArrLeft < 38){   // left round side
          dotsArr.push(`dotLeft${lastArrLeft + 1}`)
        } else {
          this.setState({topActive: true})
          dotsArr.push(`dotTop1`)
        }
      } else if (lastArrTop) {  // top straight side
        if (lastArrTop < Math.floor(widthDotCount/2)){
          dotsArr.push(`dotTop${lastArrTop + 1}`)
        } else if (lastArrTop === Math.floor(widthDotCount/2)){
          // Continue straight on top if middle logo img is still spinning
          let navLogo = document.getElementsByClassName('navLogo')[0]
          if (!navLogo.style.transition){
            this.props.startSpin()
            dotsArr.push(`dotMidRight1`)
          } else {
            dotsArr.push(`dotTop${Math.floor(widthDotCount / 2) + 1}`)
          }
        }else if (lastArrTop < widthDotCount){
          dotsArr.push(`dotTop${lastArrTop + 1}`)
        } else {
          dotsArr.push(`dotRight1`)
        }
      } else if (lastArrRight){   // right round side
        if (lastArrRight < 38){
          dotsArr.push(`dotRight${lastArrRight + 1}`)
        } else {
          this.setState({topActive: false})
          dotsArr.push(`dotBottom1`)
        }
      } else if (lastArrBottom){    // bottom straight side
        if (lastArrBottom < Math.floor(widthDotCount/2)){
          dotsArr.push(`dotBottom${lastArrBottom + 1}`)
        } else if (lastArrBottom === Math.floor(widthDotCount/2)){
          // Continue straight on bottom if middle logo img is still spinning
          let navLogo = document.getElementsByClassName('navLogo')[0]
          if (!navLogo.style.transition){
            this.props.startSpin()
            dotsArr.push(`dotMidLeft1`)
          } else {
            dotsArr.push(`dotBottom${Math.floor(widthDotCount / 2) + 1}`)
          }
        }else if (lastArrBottom < widthDotCount){
          dotsArr.push(`dotBottom${lastArrBottom + 1}`)
        } else {
          dotsArr.push(`dotLeft1`)
        }
      } else if (lastArrMidRight){    // middle right round side
        if (lastArrMidRight < 38){
          dotsArr.push(`dotMidRight${lastArrMidRight + 1}`)
        } else {
        this.state.topActive ? 
          dotsArr.push(`dotMidLeft1`) : dotsArr.push(`dotBottom${Math.floor(widthDotCount/2) + 1}`)
        }
      } else if (lastArrMidLeft){   // middle left round side
        if (lastArrMidLeft < 38){
          dotsArr.push(`dotMidLeft${lastArrMidLeft + 1}`)
        } else {
          this.state.topActive ? 
            dotsArr.push(`dotTop${Math.floor(widthDotCount / 2) + 1}`) : dotsArr.push(`dotMidRight1`)
        }
      } 

      // remove first dot in array and update state
      dotsArr.shift()
      this.setState({dotsArr})
    }, 10);
  }
  
  clearIntervals = () => {
    for (var i = 1; i < 5000; i++){
      window.clearInterval(i);
      window.clearTimeout(i);
    }
    this.resetNavWidth()
    this.props.resetSpinImg()
  }
  
  render() {
    // entire width between left round side and right round side
    let {navStraightWidth} = this.state
    if (navStraightWidth > 0){  // need this to avoid first render error
      let navbarInit = document.getElementsByClassName('navbarInit')[0]
      let navStraightWidth = +navbarInit.offsetWidth - ((20 * 2) + 6)

      // when window width changes, clear intervals and restart dots animation
      if (navStraightWidth !== this.state.navStraightWidth){  
        this.clearIntervals()
      }
    }

    return (
      <>
        {/* Need HidingDots solely for positioning middle sections */}
        <HidingDots/> 
        <ShowingDots 
          dotsArr={this.state.dotsArr}
          navStraightWidth={this.state.navStraightWidth}
        />
      </>
    )
  }
}