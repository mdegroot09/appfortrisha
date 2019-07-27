import React, {Component} from 'react'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      elements: [{type: 'text'}, {type: 'quote'}]
    }
  }

  render(){
    let displayElements = this.state.elements.map(element => {
      if (element.type === 'text'){
        return (
          <div>
            <textarea type='text'/>
          </div>
        )
      } else if (element.type === 'quote'){
        return (
          <div>
            <textarea type='text' style={{textDecoration: 'italic'}}/>
          </div>
        )
      }
    })

    return(
      <div>
        NewPostElements
        {displayElements}
      </div>
    )
  }
}

export default NewPostElements