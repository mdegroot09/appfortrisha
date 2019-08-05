import React, {Component} from 'react'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      elements: [
        {type: 'text', text: ''}, 
        {type: 'quote', quote: '', person: ''},        
        {type: 'imageLeft', url: '', }
      ]
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

  singleFileChangedHandler = (e, stateName) => {
    this.setState({[stateName]: e.target.files[0]});
   };

  render(){
    let displayElements = this.state.elements.map((element, i) => {
      if (element.type === 'text'){
        if (element.viewDraft){
          return (            
          <div className='postElement' key={i} style={{cursor: 'pointer'}} 
            onClick={() => this.editElement(i)}>
            <div className='paragraph'>
              <h3 className='newPostHeader' style={{textAlign: 'start'}}>
                {element.text ? element.text : `When I grow up, I want to be a paragraph.`}
              </h3>
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
                    Preview
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
                <h3 className='newPostHeader' style={{fontSize: '40px'}}>
                  "{element.quote ? element.quote : `Broccoli is the best.`}"
                </h3>
                <h3 className='newPostHeader' style={{alignSelf: 'flex-end'}}>
                  - {element.person ? element.person : `No one ever`}
                </h3>
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
                    Preview
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
      } else if (element.type === 'imageLeft'){
        if (element.viewDraft){
          return(
            <div className='postElement' style={{cursor: 'pointer'}} key={i}
              onClick={() => this.editElement(i)}>
              <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <h3 className='newPostHeader'>
                  viewDraft
                </h3>
              </div>
            </div>
          )
        } else {
          return (
            <div className='postElement' key={i}>
              <div style={{display: 'flex'}}>
                {this.props.state[`image${i}`] 
                  ?
                  <div className='postElement'>
                    <img className='newPostImg' style={{marginBottom: '10px'}} src={this.props.state[`image${i}`]} alt='new post'/> 
                    <button 
                      className='viewMoreBtn' style={{margin: '0', backgroundColor: 'red'}}
                      onClick={() => this.props.removeImg(`image${i}`)}>
                      Remove
                    </button>
                  </div>
                  :
                  <div>
                    <div>
                      <h3 className='newPostHeader'>Image Upload</h3>
                      <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}`)} style={{paddingLeft: '70px', marginBottom: '10px'}}/>
                      <button className="viewMoreBtn" id={`upload${i}`} 
                        onClick={() => this.props.singleFileUploadHandler(`image${i}`, `upload${i}`, this.state[`selectedFile${i}`])} 
                        style={{margin: '0'}}>
                          Upload
                      </button>
                    </div>
                  </div>
                }
                <div>
                  paragraph input
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <button 
                  className='viewMoreBtn' style={{margin: '10px 50px 0 0'}}
                  onClick={() => {this.viewDraft(i)}}>
                    Preview
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
 
    return(
      <>
        {displayElements}
      </>
    )
  }
}

export default NewPostElements