import React, {Component} from 'react'

export default class Dots extends Component {
  constructor(){
    super()
    this.state = {
      navTopWidth: 0,
      dotsArr: [
        'dotLeft1','dotLeft2','dotLeft3','dotLeft4','dotLeft5','dotLeft6','dotLeft7','dotLeft8','dotLeft9','dotLeft10','dotLeft11','dotLeft12','dotLeft13','dotLeft14','dotLeft15','dotLeft16','dotLeft17','dotLeft18','dotLeft19','dotLeft20','dotLeft21','dotLeft22','dotLeft23','dotLeft24','dotLeft25','dotLeft26','dotLeft27','dotLeft28','dotLeft29','dotLeft30','dotLeft31','dotLeft32','dotLeft33','dotLeft34','dotLeft35','dotLeft36','dotLeft37','dotLeft38','dotLeft39','dotLeft40'
      ]
    }
  }

  componentDidMount = () => {
    let navbarInit = document.getElementsByClassName('navbarInit')[0]
    let navTopWidth = +navbarInit.offsetWidth - ((20 * 2) + 4)
    console.log('navbarBorderWidth:', navTopWidth)
    this.setState({navTopWidth})
    
  }

  render(){
    return (
      <>
        <div className='dot' id='dotLeft1'></div>
        <div className='dot' id='dotLeft2'></div>
        <div className='dot' id='dotLeft3'></div>
        <div className='dot' id='dotLeft4'></div>
        <div className='dot' id='dotLeft5'></div>
        <div className='dot' id='dotLeft6'></div>
        <div className='dot' id='dotLeft7'></div>
        <div className='dot' id='dotLeft8'></div>
        <div className='dot' id='dotLeft9'></div>
        <div className='dot' id='dotLeft10'></div>
        <div className='dot' id='dotLeft11'></div>
        <div className='dot' id='dotLeft12'></div>
        <div className='dot' id='dotLeft13'></div>
        <div className='dot' id='dotLeft14'></div>
        <div className='dot' id='dotLeft15'></div>
        <div className='dot' id='dotLeft16'></div>
        <div className='dot' id='dotLeft17'></div>
        <div className='dot' id='dotLeft18'></div>
        <div className='dot' id='dotLeft19'></div>
        <div className='dot' id='dotLeft20'></div>
        <div className='dot' id='dotLeft21'></div>
        <div className='dot' id='dotLeft22'></div>
        <div className='dot' id='dotLeft23'></div>
        <div className='dot' id='dotLeft24'></div>
        <div className='dot' id='dotLeft25'></div>
        <div className='dot' id='dotLeft26'></div>
        <div className='dot' id='dotLeft27'></div>
        <div className='dot' id='dotLeft28'></div>
        <div className='dot' id='dotLeft29'></div>
        <div className='dot' id='dotLeft30'></div>
        <div className='dot' id='dotLeft31'></div>
        <div className='dot' id='dotLeft32'></div>
        <div className='dot' id='dotLeft33'></div>
        <div className='dot' id='dotLeft34'></div>
        <div className='dot' id='dotLeft35'></div>
        <div className='dot' id='dotLeft36'></div>
        <div className='dot' id='dotLeft37'></div>
        <div className='dot' id='dotLeft38'></div>
        <div className='dot' id='dotLeft39'></div>
        <div className='dot' id='dotLeft40'></div>
        <div className='dot' id='dotRight1'></div>
        <div className='dot' id='dotRight2'></div>
        <div className='dot' id='dotRight3'></div>
        <div className='dot' id='dotRight4'></div>
        <div className='dot' id='dotRight5'></div>
        <div className='dot' id='dotRight6'></div>
        <div className='dot' id='dotRight7'></div>
        <div className='dot' id='dotRight8'></div>
        <div className='dot' id='dotRight9'></div>
        <div className='dot' id='dotRight10'></div>
        <div className='dot' id='dotRight11'></div>
        <div className='dot' id='dotRight12'></div>
        <div className='dot' id='dotRight13'></div>
        <div className='dot' id='dotRight14'></div>
        <div className='dot' id='dotRight15'></div>
        <div className='dot' id='dotRight16'></div>
        <div className='dot' id='dotRight17'></div>
        <div className='dot' id='dotRight18'></div>
        <div className='dot' id='dotRight19'></div>
        <div className='dot' id='dotRight20'></div>
        <div className='dot' id='dotRight21'></div>
        <div className='dot' id='dotRight22'></div>
        <div className='dot' id='dotRight23'></div>
        <div className='dot' id='dotRight24'></div>
        <div className='dot' id='dotRight25'></div>
        <div className='dot' id='dotRight26'></div>
        <div className='dot' id='dotRight27'></div>
        <div className='dot' id='dotRight28'></div>
        <div className='dot' id='dotRight29'></div>
        <div className='dot' id='dotRight30'></div>
        <div className='dot' id='dotRight31'></div>
        <div className='dot' id='dotRight32'></div>
        <div className='dot' id='dotRight33'></div>
        <div className='dot' id='dotRight34'></div>
        <div className='dot' id='dotRight35'></div>
        <div className='dot' id='dotRight36'></div>
        <div className='dot' id='dotRight37'></div>
        <div className='dot' id='dotRight38'></div>
        <div className='dot' id='dotRight39'></div>
        <div className='dot' id='dotRight40'></div>
      </>
    )
  }
}