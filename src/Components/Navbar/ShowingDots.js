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

      if (i === 0){
        return (<div key={i} style={style} className={`dot last1 ${dot}`}></div>)
      } else if (i === 1){
        return (<div key={i} style={style} className={`dot last2 ${dot}`}></div>)
      } else if (i === 2){
        return (<div key={i} style={style} className={`dot last3 ${dot}`}></div>)
      } else if (i === 3){
        return (<div key={i} style={style} className={`dot last4 ${dot}`}></div>)
      } else if (i === 4){
        return (<div key={i} style={style} className={`dot last5 ${dot}`}></div>)
      } else if (i === 5){
        return (<div key={i} style={style} className={`dot last6 ${dot}`}></div>)
      } else if (i === 6){
        return (<div key={i} style={style} className={`dot last7 ${dot}`}></div>)
      } else if (i === 7){
        return (<div key={i} style={style} className={`dot last8 ${dot}`}></div>)
      } else if (i === 8){
        return (<div key={i} style={style} className={`dot last9 ${dot}`}></div>)
      } else if (i === 9){
        return (<div key={i} style={style} className={`dot last10 ${dot}`}></div>)
      } else if (i === 10){
        return (<div key={i} style={style} className={`dot last11 ${dot}`}></div>)
      } else if (i === 11){
        return (<div key={i} style={style} className={`dot last12 ${dot}`}></div>)
      } else if (i === 12){
        return (<div key={i} style={style} className={`dot last13 ${dot}`}></div>)
      } else if (i === 13){
        return (<div key={i} style={style} className={`dot last14 ${dot}`}></div>)
      } else if (i === 14){
        return (<div key={i} style={style} className={`dot last15 ${dot}`}></div>)
      } else if (i === 15){
        return (<div key={i} style={style} className={`dot last16 ${dot}`}></div>)
      } else if (i === 16){
        return (<div key={i} style={style} className={`dot last17 ${dot}`}></div>)
      } else if (i === 17){
        return (<div key={i} style={style} className={`dot last18 ${dot}`}></div>)
      } else if (i === 18){
        return (<div key={i} style={style} className={`dot last19 ${dot}`}></div>)
      } else if (i === 19){
        return (<div key={i} style={style} className={`dot last20 ${dot}`}></div>)
      } else if (i === 20){
        return (<div key={i} style={style} className={`dot last21 ${dot}`}></div>)
      } else if (i === 21){
        return (<div key={i} style={style} className={`dot last22 ${dot}`}></div>)
      } else if (i === 22){
        return (<div key={i} style={style} className={`dot last23 ${dot}`}></div>)
      } else if (i === 23){
        return (<div key={i} style={style} className={`dot last24 ${dot}`}></div>)
      } else if (i === 24){
        return (<div key={i} style={style} className={`dot last25 ${dot}`}></div>)
      } else if (i === 25){
        return (<div key={i} style={style} className={`dot last26 ${dot}`}></div>)
      } else if (i === 26){
        return (<div key={i} style={style} className={`dot last27 ${dot}`}></div>)
      } else if (i === 27){
        return (<div key={i} style={style} className={`dot last28 ${dot}`}></div>)
      } else if (i === 28){
        return (<div key={i} style={style} className={`dot last29 ${dot}`}></div>)
      } else if (i === 29){
        return (<div key={i} style={style} className={`dot last30 ${dot}`}></div>)
      } else if (i === 30){
        return (<div key={i} style={style} className={`dot last31 ${dot}`}></div>)
      } else if (i === 31){
        return (<div key={i} style={style} className={`dot last32 ${dot}`}></div>)
      } else if (i === 32){
        return (<div key={i} style={style} className={`dot last33 ${dot}`}></div>)
      } else if (i === 33){
        return (<div key={i} style={style} className={`dot last34 ${dot}`}></div>)
      } else if (i === 34){
        return (<div key={i} style={style} className={`dot last35 ${dot}`}></div>)
      } else if (i === 35){
        return (<div key={i} style={style} className={`dot last36 ${dot}`}></div>)
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