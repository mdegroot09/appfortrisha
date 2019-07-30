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
            <div className='quoteInput' style={{marginTop: '0'}}>
              <h3 className='newPostHeader' style={{alignSelf: 'center', marginRight: '10px'}}>Quote:</h3>
              <h3 className='newPostHeader' style={{fontStyle: 'italic', marginRight: '7px'}}>"</h3>
              <textarea type='text' className='textArea'/>
              <h3 className='newPostHeader' style={{alignSelf: 'flex-end', fontStyle: 'italic'}}>"</h3>
            </div>
            <div className='quoteInput'>
              <h3 className='newPostHeader'>By:</h3>
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