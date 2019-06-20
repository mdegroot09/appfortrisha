import React, {Component} from 'react'

export default class ShowingDots extends Component {
  render(){
    let showingDots = this.props.dotsArr.map((dot, i) => {
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

    return(
      <>
        {showingDots}
      </>
    )
  }
}