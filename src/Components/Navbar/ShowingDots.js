import React, {Component} from 'react'

export default class ShowingDots extends Component {
  render() {
    let {dotsArr} = this.props
    let showingDots = dotsArr.map((dot, i) => {
      let topNum = parseInt(dotsArr[i].split('dotTop')[1])
      let bottomNum = parseInt(dotsArr[i].split('dotBottom')[1])
      var style
      if (topNum){
        style = {left: `${(topNum * 2) + 20}px`, top: `-3.2px`}
      } else if (bottomNum){
        style = {right: `${(bottomNum * 2) + 20}px`, bottom: `-3.2px`}
      }

      if (i < 36){
        return (<div key={i} style={style} className={`dot last${i + 1} ${dot}`}></div>)
      } else {
        return (<div key={i} style={style} className={`dot ${dot}`}></div>)
      }
    })

    return(
      <>
        {showingDots}
      </>
    )
  }
}