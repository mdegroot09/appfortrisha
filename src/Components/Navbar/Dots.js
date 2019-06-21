import React, {Component} from 'react'
import ShowingDots from './ShowingDots'

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
    let navbarInit = document.getElementsByClassName('navbarInit')[0]
    let navStraightWidth = +navbarInit.offsetWidth - ((20 * 2) + 6)
    this.setState({navStraightWidth})
    this.setWidthDotCount(navStraightWidth)
    this.animDots()
  }

  setWidthDotCount = (navStraightWidth) => {
    let widthDotCount = (navStraightWidth - 1) / 2
    this.setState({widthDotCount})
  }

  animDots = () => {
    setInterval(() => { 
      var {widthDotCount} = this.state
      var {dotsArr} = this.state
      let lastLeftArr = parseInt(dotsArr[37].split('dotLeft')[1])
      let lastTopArr = parseInt(dotsArr[37].split('dotTop')[1])
      let lastRightArr = parseInt(dotsArr[37].split('dotRight')[1])
      let lastBottomArr = parseInt(dotsArr[37].split('dotBottom')[1])
      let lastMidRightArr = parseInt(dotsArr[37].split('dotMidRight')[1])
      let lastMidLeftArr = parseInt(dotsArr[37].split('dotMidLeft')[1])
      if (lastLeftArr){
        if (lastLeftArr < 38){
          dotsArr.push(`dotLeft${lastLeftArr + 1}`)
        } else {
          this.setState({topActive: true})
          dotsArr.push(`dotTop1`)
        }
      } else if (lastTopArr) {
        if (lastTopArr < widthDotCount){
          dotsArr.push(`dotTop${lastTopArr + 1}`)
        } else {
          dotsArr.push(`dotRight1`)
        }
      } else if (lastRightArr){
        if (lastRightArr < 38){
          dotsArr.push(`dotRight${lastRightArr + 1}`)
        } else {
          this.setState({topActive: false})
          dotsArr.push(`dotBottom1`)
        }
      } else if (lastBottomArr){
        if (lastBottomArr < widthDotCount){
          dotsArr.push(`dotBottom${lastBottomArr + 1}`)
        } else {
          dotsArr.push(`dotLeft1`)
        }
      } else if (lastMidRightArr){
        if (lastMidRightArr < 38){
          dotsArr.push(`dotMidRight${lastMidRightArr + 1}`)
        } else {
        this.state.topActive ? 
          dotsArr.push(`dotMidLeft1`) : dotsArr.push(`dotBottom${widthDotCount/2}`)
        }
      } else if (lastMidLeftArr){
        if (lastMidRightArr < 38){
          dotsArr.push(`dotMidRight${lastMidRightArr + 1}`)
        } else {
          this.state.topActive ? 
            dotsArr.push(`dotTop${Math.ceil(widthDotCount / 2)}`) : dotsArr.push(`dotMidRight1`)
        }
      } 
      dotsArr.shift()
      this.setState({dotsArr})
    }, 10);
  }
  
  render() {
    let {navStraightWidth} = this.state
    if (navStraightWidth > 0){
      let navbarInit = document.getElementsByClassName('navbarInit')[0]
      let navStraightWidth = +navbarInit.offsetWidth - ((20 * 2) + 6)
      if (navStraightWidth !== this.state.navStraightWidth){
        for (var i = 1; i < 100; i++){
          window.clearInterval(i);
        }
        this.setState({navStraightWidth})
        this.setWidthDotCount(navStraightWidth)
        this.animDots()
      }
    }
    return (
      <>
        <ShowingDots 
          dotsArr={this.state.dotsArr}
          navStraightWidth={this.state.navStraightWidth}
        />
      </>
    )
  }
}