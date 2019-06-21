import React, {Component} from 'react'

export default class ShowingDots extends Component {
  render() {
    let {dotsArr} = this.props
    let {navStraightWidth} = this.props
    let showingDots = dotsArr.map((dot, i) => {
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
        const element = document.querySelector(`.${dot}`)
        let right
        let styleSelect
        if (element){
          styleSelect = getComputedStyle(element)
          // console.log('styleSelect.left:', styleSelect.left)
          right = (Math.floor(navStraightWidth / 2)) + 20 + styleSelect.left
        }
        style = {right: `${right}px`, top: `${styleSelect.top}`}
      } else if (midLeftNum){
        const element = document.querySelector(`.${dot}`)
        let left
        let styleSelect
        if (element){
          styleSelect = getComputedStyle(element)
          // console.log('styleSelect.left:', styleSelect.left)
          left = (Math.floor(navStraightWidth / 2)) + 20 + styleSelect.left
        }
        style = {left: `${left}px`, top: `${styleSelect.top}`}
      }

      if (i < 36){
        return <div key={i} style={style} className={`dot last${i + 1} ${dot}`}></div>
      } else {
        return <div key={i} style={style} className={`dot ${dot}`}></div>
      }
    })

    return <>{showingDots}</>
  }
}