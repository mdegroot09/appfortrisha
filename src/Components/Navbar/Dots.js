import React, {Component} from 'react'

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
    let showingDots = this.state.dotsArr.map((dot, i) => {
      if (i === 0){
        return (<div key={i} className={`dot last1 ${dot}`}></div>)
      } else if (i === 1){
        return (<div key={i} className={`dot last2 ${dot}`}></div>)
      } else if (i === 2){
        return (<div key={i} className={`dot last3 ${dot}`}></div>)
      } else if (i === 3){
        return (<div key={i} className={`dot last4 ${dot}`}></div>)
      } else if (i === 4){
        return (<div key={i} className={`dot last5 ${dot}`}></div>)
      } else if (i === 5){
        return (<div key={i} className={`dot last6 ${dot}`}></div>)
      } else if (i === 6){
        return (<div key={i} className={`dot last7 ${dot}`}></div>)
      } else if (i === 7){
        return (<div key={i} className={`dot last8 ${dot}`}></div>)
      } else if (i === 8){
        return (<div key={i} className={`dot last9 ${dot}`}></div>)
      } else if (i === 9){
        return (<div key={i} className={`dot last10 ${dot}`}></div>)
      } else if (i === 10){
        return (<div key={i} className={`dot last11 ${dot}`}></div>)
      } else if (i === 11){
        return (<div key={i} className={`dot last12 ${dot}`}></div>)
      } else if (i === 12){
        return (<div key={i} className={`dot last13 ${dot}`}></div>)
      } else if (i === 13){
        return (<div key={i} className={`dot last14 ${dot}`}></div>)
      } else if (i === 14){
        return (<div key={i} className={`dot last15 ${dot}`}></div>)
      } else if (i === 15){
        return (<div key={i} className={`dot last16 ${dot}`}></div>)
      } else if (i === 16){
        return (<div key={i} className={`dot last17 ${dot}`}></div>)
      } else if (i === 17){
        return (<div key={i} className={`dot last18 ${dot}`}></div>)
      } else {
        return (<div key={i} className={`dot ${dot}`}></div>)
      }
    })

    return (
      <>
        {showingDots}
      </>
    )
  }
}