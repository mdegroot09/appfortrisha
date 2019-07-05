import React, {Component} from 'react'

export default class ShowingDots extends Component {
  render() {
    let {dotsArr} = this.props
    let {navStraightWidth} = this.props
    var showingDots = dotsArr.map((dot, i) => {
      let topNum = parseInt(dotsArr[i].split('dotTop')[1])
      let bottomNum = parseInt(dotsArr[i].split('dotBottom')[1])
      let midRightNum = parseInt(dotsArr[i].split('dotMidRight')[1])
      let midLeftNum = parseInt(dotsArr[i].split('dotMidLeft')[1])

      let style
      if (topNum){
        style = {left: `${(topNum * 2) + 20}px`, top: `-3.2px`}
      } else if (bottomNum){
        style = {right: `${(bottomNum * 2) + 20}px`, bottom: `-3.2px`}
      } else if (midRightNum) {
        let element = document.getElementById(`dotRight${midRightNum}`)
        let right
        let styleSelect
        let top
        if (element){
          styleSelect = getComputedStyle(element)
          right = (Math.floor(navStraightWidth / 2)) + parseInt(styleSelect.right) - 1
          top = styleSelect.top
        }
        style = {right: `${right}px`, top: `${top}`}
      } else if (midLeftNum){
        let element = document.getElementById(`dotLeft${midLeftNum}`)
        let left = element.style.left
        let styleSelect
        let top
        if (element){
          styleSelect = getComputedStyle(element)
          left = (Math.floor(navStraightWidth / 2)) + parseInt(styleSelect.left) - 1
          top = styleSelect.top
        }
        style = {left: `${left}px`, top: `${top}`}
      }

      return <div key={i} style={style} className={`dot last${i + 1}`} id={dot}></div>
    })

    return <>{showingDots}</>
  }
}