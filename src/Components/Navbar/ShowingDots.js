import React, {Component} from 'react'

export default class ShowingDots extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount = () => {
    
  }

  render() {
    let {dotsArr} = this.props
    let {navStraightWidth} = this.props
    var showingDots = dotsArr.map((dot, i) => {
      let topNum = parseInt(dotsArr[i].split('dotTop')[1])
      let bottomNum = parseInt(dotsArr[i].split('dotBottom')[1])
      let midRightNum = parseInt(dotsArr[i].split('dotMidRight')[1])
      let midLeftNum = parseInt(dotsArr[i].split('dotMidLeft')[1])
      // console.log('dotsArr:', dotsArr)
      // console.log('topNum:', topNum, 'bottomNum:', bottomNum, 'midRightNum:', midRightNum, 'midLeftNum:', midLeftNum)

      let style
      if (topNum){
        style = {left: `${(topNum * 2) + 20}px`, top: `-3.2px`}
      } else if (bottomNum){
        style = {right: `${(bottomNum * 2) + 20}px`, bottom: `-3.2px`}
      } else if (midRightNum) {
        let element = document.getElementById(`dotRight${midRightNum}`)
        // console.log('right element:', element)
        let right
        let styleSelect
        let top
        // console.log('right:', right)
        if (element){
          // console.log('accessed2!')
          styleSelect = getComputedStyle(element)
          // console.log('styleSelect.left:', styleSelect.left)
          right = (Math.floor(navStraightWidth / 2)) + 20 + parseInt(styleSelect.right)
          top = styleSelect.top
          // console.log('right:', right, 'top:', top, 'styleSelect.right:', styleSelect.right, 'navStraightWidth:', navStraightWidth)
        }
        style = {right: `${right}px`, top: `${top}`}
      } else if (midLeftNum){
        let element = document.getElementById(`dotLeft${midLeftNum}`)
        // console.log('left element:', element)
        let left = element.style.left
        let styleSelect
        let top
        // console.log('left:', left)
        if (element){
          // console.log('accessed2!')
          styleSelect = getComputedStyle(element)
          // console.log('styleSelect.left:', styleSelect.left)
          left = (Math.floor(navStraightWidth / 2)) + 20 + parseInt(styleSelect.left)
          console.log('left:', left, 'top:', top, 'styleSelect.left:', styleSelect.left, 'navStraightWidth:', navStraightWidth)
          top = styleSelect.top
        }
        style = {left: `${left}px`, top: `${top}`}
      }

      if (i < 36){
        return <div key={i} style={style} className={`dot last${i + 1}`} id={dot}></div>
      } else {
        return <div key={i} style={style} className={`dot`} id={dot}></div>
      }
    })

    return <>{showingDots}</>

  }
}