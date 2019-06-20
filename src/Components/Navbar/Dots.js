import React, {Component} from 'react'
import ShowingDots from './ShowingDots'

export default class Dots extends Component {
  constructor(){
    super()
    this.state = {
      navTopWidth: 0,
      dotsArr: [
       'dotLeft1', 'dotLeft2', 'dotLeft3', 'dotLeft4', 'dotLeft5', 'dotLeft6', 'dotLeft7', 'dotLeft8', 'dotLeft9', 'dotLeft10', 'dotLeft11', 'dotLeft12', 'dotLeft13', 'dotLeft14', 'dotLeft15', 'dotLeft16', 'dotLeft17', 'dotLeft18', 'dotLeft19', 'dotLeft20', 'dotLeft21', 'dotLeft22', 'dotLeft23', 'dotLeft24', 'dotLeft25', 'dotLeft26', 'dotLeft27', 'dotLeft28', 'dotLeft29', 'dotLeft30', 'dotLeft31', 'dotLeft32', 'dotLeft33', 'dotLeft34', 'dotLeft35', 'dotLeft36', 'dotLeft37', 'dotLeft38'
      ]
    }
  }

  componentDidMount = () => {
    let navbarInit = document.getElementsByClassName('navbarInit')[0]
    let navTopWidth = +navbarInit.offsetWidth - ((20 * 2) + 4)
    console.log('navbarBorderWidth:', navTopWidth)
    this.setState({navTopWidth})
    this.animDots(navTopWidth)
  }

  animDots = (navTopWidth) => {
    setInterval(() => { 
      var {dotsArr} = this.state
      let lastLeftArr = parseInt(dotsArr[37].split('dotLeft')[1])
      let lastRightArr = parseInt(dotsArr[37].split('dotRight')[1])
      if (lastLeftArr){
        if (lastLeftArr < 38){
          dotsArr.push(`dotLeft${lastLeftArr + 1}`)
        } else {
          dotsArr.push(`dotRight1`)
        }
      } else if (lastRightArr){
          if (lastRightArr < 38){
            dotsArr.push(`dotRight${lastRightArr + 1}`)
          } else {
            dotsArr.push(`dotLeft1`)
          }
      }
      dotsArr.shift()
      this.setState({dotsArr})
    }, 15);
  }
  
  render(){
    return (
      <>
        <ShowingDots dotsArr={this.state.dotsArr}/>
      </>
    )
  }
}