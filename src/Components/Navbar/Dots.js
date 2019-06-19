import React, {Component} from 'react'

export default class Dots extends Component {
  constructor(){
    super()
    this.state = {
      navTopWidth: 0,
      dotsArr: [
       'dotLeft1', 'dotLeft2', 'dotLeft3', 'dotLeft4', 'dotLeft5', 'dotLeft6', 'dotLeft7', 'dotLeft8', 'dotLeft9', 'dotLeft10', 'dotLeft11', 'dotLeft12', 'dotLeft13', 'dotLeft14', 'dotLeft15', 'dotLeft16', 'dotLeft17', 'dotLeft18', 'dotLeft19', 'dotLeft20', 'dotLeft21', 'dotLeft22', 'dotLeft23', 'dotLeft24', 'dotLeft25', 'dotLeft26', 'dotLeft27', 'dotLeft28', 'dotLeft29', 'dotLeft30', 'dotLeft31', 'dotLeft32', 'dotLeft33', 'dotLeft34', 'dotLeft35', 'dotLeft36', 'dotLeft37', 'dotLeft38', 'dotLeft39', 'dotLeft40'
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
    // console.log('lastInArr:', lastLeftArr, typeof(lastLeftArr))
    setInterval(() => { 
      var {dotsArr} = this.state
      let lastLeftArr = parseInt(dotsArr[39].split('dotLeft')[1])
      let lastRightArr = parseInt(dotsArr[39].split('dotRight')[1])
      if (lastLeftArr){
        if (lastLeftArr < 40){
          dotsArr.push(`dotLeft${lastLeftArr + 1}`)
        } else {
          dotsArr.push(`dotRight1`)
        }
      } else if (lastRightArr){
          if (lastRightArr < 40){
            dotsArr.push(`dotRight${lastRightArr + 1}`)
          } else {
            dotsArr.push(`dotLeft1`)
          }
      }
      dotsArr.shift()

      this.setState({dotsArr})
    }, 50);
  }
  
  render(){
    let showingDots = this.state.dotsArr.map((dot, i) => {
      return (
        <div key={i} className='dot' id={dot}></div>
      )
    })
    return (
      <>
        {showingDots}
        {/* <div className='dotHide' id='dotLeft40'></div>
        <div className='dotHide' id='dotLeft39'></div>
        <div className='dotHide' id='dotLeft38'></div>
        <div className='dotHide' id='dotLeft37'></div>
        <div className='dotHide' id='dotLeft36'></div>
        <div className='dotHide' id='dotLeft35'></div>
        <div className='dotHide' id='dotLeft34'></div>
        <div className='dotHide' id='dotLeft33'></div>
        <div className='dotHide' id='dotLeft32'></div>
        <div className='dotHide' id='dotLeft31'></div>
        <div className='dotHide' id='dotLeft30'></div>
        <div className='dotHide' id='dotLeft29'></div>
        <div className='dotHide' id='dotLeft28'></div>
        <div className='dotHide' id='dotLeft27'></div>
        <div className='dotHide' id='dotLeft26'></div>
        <div className='dotHide' id='dotLeft25'></div>
        <div className='dotHide' id='dotLeft24'></div>
        <div className='dotHide' id='dotLeft23'></div>
        <div className='dotHide' id='dotLeft22'></div>
        <div className='dotHide' id='dotLeft21'></div>
        <div className='dotHide' id='dotLeft20'></div>
        <div className='dotHide' id='dotLeft19'></div>
        <div className='dotHide' id='dotLeft18'></div>
        <div className='dotHide' id='dotLeft17'></div>
        <div className='dotHide' id='dotLeft16'></div>
        <div className='dotHide' id='dotLeft15'></div>
        <div className='dotHide' id='dotLeft14'></div>
        <div className='dotHide' id='dotLeft13'></div>
        <div className='dotHide' id='dotLeft12'></div>
        <div className='dotHide' id='dotLeft11'></div>
        <div className='dotHide' id='dotLeft10'></div>
        <div className='dotHide' id='dotLeft9'></div>
        <div className='dotHide' id='dotLeft8'></div>
        <div className='dotHide' id='dotLeft7'></div>
        <div className='dotHide' id='dotLeft6'></div>
        <div className='dotHide' id='dotLeft5'></div>
        <div className='dotHide' id='dotLeft4'></div>
        <div className='dotHide' id='dotLeft3'></div>
        <div className='dotHide' id='dotLeft2'></div>
        <div className='dotHide' id='dotLeft1'></div>
        <div className='dotHide' id='dotRight1'></div>
        <div className='dotHide' id='dotRight2'></div>
        <div className='dotHide' id='dotRight3'></div>
        <div className='dotHide' id='dotRight4'></div>
        <div className='dotHide' id='dotRight5'></div>
        <div className='dotHide' id='dotRight6'></div>
        <div className='dotHide' id='dotRight7'></div>
        <div className='dotHide' id='dotRight8'></div>
        <div className='dotHide' id='dotRight9'></div>
        <div className='dotHide' id='dotRight10'></div>
        <div className='dotHide' id='dotRight11'></div>
        <div className='dotHide' id='dotRight12'></div>
        <div className='dotHide' id='dotRight13'></div>
        <div className='dotHide' id='dotRight14'></div>
        <div className='dotHide' id='dotRight15'></div>
        <div className='dotHide' id='dotRight16'></div>
        <div className='dotHide' id='dotRight17'></div>
        <div className='dotHide' id='dotRight18'></div>
        <div className='dotHide' id='dotRight19'></div>
        <div className='dotHide' id='dotRight20'></div>
        <div className='dotHide' id='dotRight21'></div>
        <div className='dotHide' id='dotRight22'></div>
        <div className='dotHide' id='dotRight23'></div>
        <div className='dotHide' id='dotRight24'></div>
        <div className='dotHide' id='dotRight25'></div>
        <div className='dotHide' id='dotRight26'></div>
        <div className='dotHide' id='dotRight27'></div>
        <div className='dotHide' id='dotRight28'></div>
        <div className='dotHide' id='dotRight29'></div>
        <div className='dotHide' id='dotRight30'></div>
        <div className='dotHide' id='dotRight31'></div>
        <div className='dotHide' id='dotRight32'></div>
        <div className='dotHide' id='dotRight33'></div>
        <div className='dotHide' id='dotRight34'></div>
        <div className='dotHide' id='dotRight35'></div>
        <div className='dotHide' id='dotRight36'></div>
        <div className='dotHide' id='dotRight37'></div>
        <div className='dotHide' id='dotRight38'></div>
        <div className='dotHide' id='dotRight39'></div>
        <div className='dotHide' id='dotRight40'></div> */}
      </>
    )
  }
}