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
          <div className='postElement'>
            <div className='quoteInput'>
              <h3>Quote: "</h3>
              <textarea type='text' style={{fontStyle: 'italic'}}/>
              <h3>"</h3>
            </div>
            <div className='quoteInput'>
              <h3>By:</h3>
              <input className='filter quotePerson' type="text" placeholder='person'/>
            </div>
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