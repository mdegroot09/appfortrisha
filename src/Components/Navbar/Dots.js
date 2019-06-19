import React, {Component} from 'react'

export default class Dots extends Component {
  constructor(){
    super()
    this.state = {
      navTopWidth: 0,
      dotsArr: [
       'dotLeft40', 'dotLeft39', 'dotLeft38', 'dotLeft37', 'dotLeft36', 'dotLeft35', 'dotLeft34', 'dotLeft33', 'dotLeft32', 'dotLeft31', 'dotLeft30', 'dotLeft29', 'dotLeft28', 'dotLeft27', 'dotLeft26', 'dotLeft25', 'dotLeft24', 'dotLeft23', 'dotLeft22', 'dotLeft21', 'dotLeft20', 'dotLeft19', 'dotLeft18', 'dotLeft17', 'dotLeft16', 'dotLeft15', 'dotLeft14', 'dotLeft13', 'dotLeft12', 'dotLeft11', 'dotLeft10', 'dotLeft9', 'dotLeft8', 'dotLeft7', 'dotLeft6', 'dotLeft5', 'dotLeft4', 'dotLeft3', 'dotLeft2', 'dotLeft1'
      ],
      dotsArrTest: [
        'dotLeft40', 'dotLeft39', 'dotLeft38', 'dotLeft37', 'dotLeft36'
      ]
    }
  }

  componentDidMount = () => {
    let navbarInit = document.getElementsByClassName('navbarInit')[0]
    let navTopWidth = +navbarInit.offsetWidth - ((20 * 2) + 4)
    console.log('navbarBorderWidth:', navTopWidth)
    this.setState({navTopWidth})
    this.moveDots(navTopWidth)
  }

  moveDots = (navTopWidth) => {

  }

  render(){
    return (
      <>
        <div className='dotHide' id='dotLeft40'></div>
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
        <div className='dotHide' id='dotRight40'></div>
      </>
    )
  }
}