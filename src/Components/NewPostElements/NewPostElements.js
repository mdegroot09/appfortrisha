import React, {Component} from 'react'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      elements: [{type: 'text', text: ''}, {type: 'quote', quote: '', person: ''}]
    }
  }

  handleChange = (i, keyName, val) => {
    let {elements} = this.state
    elements[i][keyName] = val
    this.setState({elements})
  }

  viewDraft = (i) => {
    let {elements} = this.state
    elements[i].viewDraft = true
    this.setState({elements})
  }

  editElement = (i) => {
    let {elements} = this.state
    elements[i].viewDraft = false
    this.setState({elements})
  }

  deleteElement = (i) => {
    if (window.confirm('Are you sure you want to delete this?')){
      let {elements} = this.state
      elements.splice(i, 1)
      this.setState({elements})
    }
  }

  render(){
    let displayElements = this.state.elements.map((element, i) => {
      if (element.type === 'text'){
        if (element.viewDraft){
          return (            
          <div className='postElement' key={i} style={{cursor: 'pointer'}} 
            onClick={() => this.editElement(i)}>
            <div className='quoteInput' style={{flexDirection: 'column'}}>
              <h3 className='newPostHeader'>{element.text}</h3>
            </div>
          </div>)
        } else {
          return (
            <div className='postElement' key={i}>
              <div className='quoteInput'>
                <h3 className='newPostHeader' style={{alignSelf: 'center', marginRight: '10px'}}>Paragraph:</h3>
                <textarea type='text' className='textArea' id={`text${i}`}
                  onChange={(e) => this.handleChange(i, 'text', e.target.value)}/>
              </div>
              <div style={{display: 'flex'}}>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 50px 0 0', backgroundColor: 'red'}}
                  onClick={() => {this.deleteElement(i)}}>
                    Delete
                </button>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 0 0 0'}}
                  onClick={() => {this.viewDraft(i)}}>
                    View Draft
                </button>
              </div>
            </div>
          )
        }
      } else if (element.type === 'quote'){
        if(element.viewDraft){
          return(
            <div className='postElement' key={i} style={{cursor: 'pointer'}} 
              onClick={() => this.editElement(i)}>
              <div className='quoteInput' style={{flexDirection: 'column'}}>
                <h3 className='newPostHeader' style={{fontSize: '40px'}}>"{element.quote}"</h3>
                <h3 className='newPostHeader' style={{alignSelf: 'flex-end'}}>- {element.person}</h3>
              </div>
            </div>
          )
        } else {
          return (
            <div className='postElement' key={i}>
              <div className='quoteInput'>
                <h3 className='newPostHeader' style={{alignSelf: 'center', marginRight: '10px'}}>Quote:</h3>
                <h3 className='newPostHeader' style={{fontStyle: 'italic', marginRight: '7px'}}>"</h3>
                <textarea type='text' className='quoteText' id={`quoteInput${i}`}
                  onChange={(e) => this.handleChange(i, 'quote', e.target.value)} value={element.quote}/>
                <h3 className='newPostHeader' style={{alignSelf: 'flex-end', fontStyle: 'italic'}}>"</h3>
              </div>
              <div className='quoteInput'>
                <h3 className='newPostHeader'>By:</h3>
                <input id={`quotePerson${i}`} className='filter quotePerson' type="text" placeholder='person'
                  onChange={(e) => this.handleChange(i, 'person', e.target.value)} value={element.person}/>
              </div>
              <div style={{display: 'flex'}}>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 50px 0 0', backgroundColor: 'red'}}
                  onClick={() => {this.deleteElement(i)}}>
                    Delete
                </button>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 0 0 0'}}
                  onClick={() => {this.viewDraft(i)}}>
                    View Draft
                </button>
              </div>
            </div>
          )
        }
      } else {
        return <></>
      }
    })

    return(
      <div style={{width: 'inherit'}}>
        NewPostElements
        {displayElements}
      </div>
    )
  }
}

export default NewPostElements