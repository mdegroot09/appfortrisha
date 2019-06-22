import React, {Component} from 'react'

export default class HiddenDots extends Component {
  constructor(){
    super()
    this.state = {
      left: [],
      top: [],
      right: [], 
      bottom: [],
      midRight: [],
      midLeft: []
    }
  }
  
  componentDidMount = () => {
    let left = []
    let top = []
    let right = []
    let bottom = []
    let midRight = []
    let midleft = []
    for (let i = 1; i < 39; i++){
      left.push(<div key={i} id={`dotLeft${i}`}></div>)
      right.push(<div key={i} id={`dotRight${i}`}></div>)
    }
    this.setState({left, right})
  }
  
  render(){
    let {left, right} = this.state
    return (
      <>
        {left}
        {right}
      </>
    )
  }
}