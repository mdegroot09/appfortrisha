import React, {Component} from 'react'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      postTitle: {title: ''},
      elements: [
        {type: 'text', text: ''}, 
        {type: 'quote', quote: '', person: ''}
      ]
    }
  }

  handleChange = (i, keyName, val) => {
    let {elements} = this.state
    elements[i][keyName] = val
    this.setState({elements})
  }

  updateTitle = (val) => {
    let {postTitle} = this.state
    postTitle.title = val
    this.setState({postTitle})
  }

  updateTitleView = (bool) => {
    let {postTitle} = this.state
    postTitle.editDraft = bool
    if (!bool) {
      postTitle.title = postTitle.title.trim()
    }
    this.setState({postTitle})
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
                <textarea type='text' className='textArea' id={`text${i}`} value={element.text}
                  onChange={(e) => this.handleChange(i, 'text', e.target.value)}/>
              </div>
              <div style={{display: 'flex'}}>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 50px 0 0'}}
                  onClick={() => {this.viewDraft(i)}}>
                    View
                </button>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                  onClick={() => {this.deleteElement(i)}}>
                    Delete
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
              <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
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
                <h3 className='newPostHeader' style={{fontStyle: 'italic', marginRight: '7px', marginLeft: '0'}}>"</h3>
                <textarea type='text' className='quoteText' id={`quoteInput${i}`}
                  onChange={(e) => this.handleChange(i, 'quote', e.target.value)} value={element.quote}/>
                <h3 className='newPostHeader' style={{alignSelf: 'flex-end', fontStyle: 'italic', marginLeft: '0'}}>"</h3>
              </div>
              <div className='quoteInput' style={{marginTop: '10px'}}>
                <h3 className='newPostHeader'>Name:</h3>
                <input id={`quotePerson${i}`} className='filter quotePerson' type="text"
                  onChange={(e) => this.handleChange(i, 'person', e.target.value)} value={element.person}/>
              </div>
              <div style={{display: 'flex'}}>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 50px 0 0'}}
                  onClick={() => {this.viewDraft(i)}}>
                    View
                </button>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                  onClick={() => {this.deleteElement(i)}}>
                    Delete
                </button>
              </div>
            </div>
          )
        }
      } else {
        return <></>
      }
    })

    let {title} = this.state.postTitle

    return(
      <>
        <div className='postElement'>
          {!this.state.postTitle.editDraft 
            ?
            <h2 className='sectionTitle' onClick={() => this.updateTitleView(true)}>{title ? title : 'Untitled Post'}</h2>
            :
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input 
                onChange={(e) => this.updateTitle(e.target.value)}
                value={title}
                placeholder='title'
                className='filter'
                style={{margin: '0'}}
              />
              <button 
                className='viewMoreBtn' style={{margin: '10px 0 0 0'}}
                onClick={() => {this.updateTitleView(false)}}>
                  View
              </button>
            </div>
          }
        </div>
        {displayElements}
      </>
    )
  }
}

export default NewPostElements