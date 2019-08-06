import React, {Component} from 'react'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      elements: [
        {type: 'text', text: ''}, 
        {type: 'quote', quote: '', person: ''},        
        {type: 'imageLeft', url: '', text: ''},
        {type: 'imageRight', url: '', text: ''},
        {type: 'imageSingle', url: ''},
        {type: 'imageDouble', url1: '', url2: ''}
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
        return(
          <div className='postElement' style={{cursor: 'pointer'}} key={i}>
            <div style={{display: 'flex', alignItems: 'center'}} >
              {this.props.state[`image${i}`] 
                ?
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img className='newPostImg' style={{width: '100%'}} src={this.props.state[`image${i}`]} alt='new post'/> 
                  {element.viewDraft 
                    ?
                    <></>
                    :
                    <button 
                      className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                      onClick={() => this.props.removeImg(`image${i}`)}>
                      Remove
                    </button>
                  }
                </div>
                :
                <div style={{width: '50%'}}>
                  <div>
                    <h3 className='newPostHeader'>Image Upload</h3>
                    <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}`)} style={{marginBottom: '10px', width: '190px'}}/>
                    <button className="viewMoreBtn" id={`upload${i}`} 
                      onClick={() => this.props.singleFileUploadHandler(`image${i}`, `upload${i}`, this.state[`selectedFile${i}`])} 
                      style={{margin: '0'}}>
                        Upload
                    </button>
                  </div>
                </div>
              }
              {element.viewDraft 
                ?
                <div style={{width: '50%', marginLeft: '10px', display: 'flex', alignItems: 'center'}}
                  onClick={() => this.editElement(i)}>
                  <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <h3 className='newPostHeader' style={{width: '100%', textAlign: 'left', marginLeft: '0'}}>
                      {element.text ? element.text : 'Edit me.'}
                    </h3>
                  </div>
                </div>
                :
                <div style={{width: '50%', marginLeft: '10px'}}>
                  <h3 className='newPostHeader' style={{alignSelf: 'center', margin: '0', maxWidth: 'calc(100%-20px)'}}>Paragraph:</h3>
                  <div className='quoteInput' style={{maxWidth: 'calc(100%-20px)'}}>
                    <textarea type='text' className='textArea' id={`text${i}`} value={element.text}
                      onChange={(e) => this.handleChange(i, 'text', e.target.value)}
                      style={{width: '100%'}}/>
                  </div>
                </div>
              }
            </div>
            {element.viewDraft
              ?
              <></>
              :
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
            }
          </div>
        )
      } else if (element.type === 'imageRight'){
        return(
          <div className='postElement' style={{cursor: 'pointer'}} key={i}>
            <div style={{display: 'flex', alignItems: 'center'}} >
              {element.viewDraft 
                ?
                <div style={{width: '50%', display: 'flex', alignItems: 'center'}}
                  onClick={() => this.editElement(i)}>
                  <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <h3 className='newPostHeader' style={{width: '100%', textAlign: 'left', marginLeft: '10px', marginRight: '10px'}}>
                      {element.text ? element.text : 'Edit me.'}
                    </h3>
                  </div>
                </div>
                :
                <div style={{width: '50%'}}>
                  <h3 className='newPostHeader' style={{alignSelf: 'center', margin: '0', maxWidth: 'calc(100%-20px)'}}>Paragraph:</h3>
                  <div className='quoteInput' style={{maxWidth: 'calc(100%-20px)'}}>
                    <textarea type='text' className='textArea' id={`text${i}`} value={element.text}
                      onChange={(e) => this.handleChange(i, 'text', e.target.value)}
                      style={{width: '100%'}}/>
                  </div>
                </div>
              }
              {this.props.state[`image${i}`] 
                ?
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px'}}>
                  <img className='newPostImg' style={{width: '100%'}} src={this.props.state[`image${i}`]} alt='new post'/> 
                  {element.viewDraft 
                    ?
                    <></>
                    :
                    <button 
                      className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                      onClick={() => this.props.removeImg(`image${i}`)}>
                      Remove
                    </button>
                  }
                </div>
                :
                <div style={{width: '50%', marginLeft: '10px'}}>
                  <div>
                    <h3 className='newPostHeader'>Image Upload</h3>
                    <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}`)} style={{marginBottom: '10px', width: '190px'}}/>
                    <button className="viewMoreBtn" id={`upload${i}`} 
                      onClick={() => this.props.singleFileUploadHandler(`image${i}`, `upload${i}`, this.state[`selectedFile${i}`])} 
                      style={{margin: '0'}}>
                        Upload
                    </button>
                  </div>
                </div>
              }
            </div>
            {element.viewDraft
              ?
              <></>
              :
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
            }
          </div>
        )
      } else if (element.type === 'imageSingle'){
        return (
          <div className='postElement' key={i}>
            {this.props.state[`image${i}`] 
              ?
              <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
              onClick={this.viewDraft ? () => this.editElement(i) : {}}>
                <img className='newPostImg' src={this.props.state[`image${i}`]} alt='new post'/> 
                {element.viewDraft 
                  ?
                  <></>
                  :
                  <button 
                    className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                    onClick={() => this.props.removeImg(`image${i}`)}>
                    Remove
                  </button>
                }
              </div>
              :
              <div style={{maxWidth: '100%'}}>
                <div>
                  <h3 className='newPostHeader'>Image Upload</h3>
                  <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}`)} style={{marginBottom: '10px', width: '190px'}}/>
                  <button className="viewMoreBtn" id={`upload${i}`} 
                    onClick={() => this.props.singleFileUploadHandler(`image${i}`, `upload${i}`, this.state[`selectedFile${i}`])} 
                    style={{margin: '0'}}>
                      Upload
                  </button>
                </div>
              </div>
            }
            {element.viewDraft
              ?
              <></>
              :
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
            }
          </div>
        )
      } else if (element.type === 'imageDouble'){
        return (
          <div className='postElement' key={i}>
            <div style={{width: 'inherit', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              {this.props.state[`image${i}a`] 
                ?
                <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                onClick={this.viewDraft ? () => this.editElement(i) : {}}>
                  <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={this.props.state[`image${i}a`]} alt='new post'/> 
                  {element.viewDraft 
                    ?
                    <></>
                    :
                    <button 
                      className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                      onClick={() => this.props.removeImg(`image${i}a`)}>
                      Remove
                    </button>
                  }
                </div>
                :
                <div style={{maxWidth: '50%'}}>
                  <div>
                    <h3 className='newPostHeader'>Image Upload</h3>
                    <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}a`)} style={{marginBottom: '10px', width: '190px'}}/>
                    <button className="viewMoreBtn" id={`upload${i}a`} 
                      onClick={() => this.props.singleFileUploadHandler(`image${i}a`, `upload${i}a`, this.state[`selectedFile${i}a`])} 
                      style={{margin: '0'}}>
                        Upload
                    </button>
                  </div>
                </div>
              }
              {this.props.state[`image${i}b`] 
                ?
                <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                onClick={this.viewDraft ? () => this.editElement(i) : {}}>
                  <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={this.props.state[`image${i}b`]} alt='new post'/> 
                  {element.viewDraft 
                    ?
                    <></>
                    :
                    <button 
                      className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                      onClick={() => this.props.removeImg(`image${i}b`)}>
                      Remove
                    </button>
                  }
                </div>
                :
                <div style={{maxWidth: '50%'}}>
                  <div>
                    <h3 className='newPostHeader'>Image Upload</h3>
                    <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="file" onChange={(e) => this.singleFileChangedHandler(e, `selectedFile${i}b`)} style={{marginBottom: '10px', width: '190px'}}/>
                    <button className="viewMoreBtn" id={`upload${i}b`} 
                      onClick={() => this.props.singleFileUploadHandler(`image${i}b`, `upload${i}b`, this.state[`selectedFile${i}b`])} 
                      style={{margin: '0'}}>
                        Upload
                    </button>
                  </div>
                </div>
              }
            </div>
            {element.viewDraft
              ?
              <></>
              :
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
            }
          </div>
        )
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