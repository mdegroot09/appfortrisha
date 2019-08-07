import React, {Component} from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ImageDouble from '../ImageDouble/ImageDouble';
import ImageSingle from '../ImageSingle/ImageSingle';
import ImageRight from '../ImageRight/ImageRight';
import ImageLeft from '../ImageLeft/ImageLeft';
import Quote from '../Quote/Quote'

class NewPostElements extends Component {
  constructor(){
    super()
    this.state = {
      elements: [
        {type: 'sectionHeader', text: ''},
        {type: 'paragraph', text: ''}, 
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
    if (elements[i].text) {
      elements[i].text = elements[i].text.trim()
    }
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
      if (element.type === 'paragraph'){
        if (element.viewDraft){
          return (            
          <div className='postElement' key={i} style={{cursor: 'pointer'}} 
            onClick={() => this.editElement(i)}>
            <div className='paragraph'>
              <h3 className='newPostHeader' style={{textAlign: 'start', marginLeft: '0'}}>
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
        return(
          <div className='postElement' key={i}>
            <Quote
              element={element}
              i={i}
              editElement={this.editElement}
              handleChange={this.handleChange}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
            />
          </div>
        )
      } else if (element.type === 'imageLeft'){
        return(
          <div className='postElement' style={{cursor: 'pointer'}} key={i}>
            <ImageLeft
              element={element}
              i={i}
              handleChange={this.handleChange}
              state={this.props.state}
              singleFileChangedHandler={this.singleFileChangedHandler}
              singleFileUploadHandler={this.props.singleFileUploadHandler}
              selectedFile={this.state[`selectedFile${i}`]}
              editElement={this.editElement}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
              removeImg={this.props.removeImg}
            />
          </div>
        )
      } else if (element.type === 'imageRight'){
        return(
          <div className='postElement' style={{cursor: 'pointer'}} key={i}>
            <ImageRight
              element={element}
              i={i}
              handleChange={this.handleChange}
              state={this.props.state}
              singleFileChangedHandler={this.singleFileChangedHandler}
              singleFileUploadHandler={this.props.singleFileUploadHandler}
              selectedFile={this.state[`selectedFile${i}`]}
              editElement={this.editElement}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
              removeImg={this.props.removeImg}
            />  
          </div>
        )
      } else if (element.type === 'imageSingle'){
        return (
          <div className='postElement' key={i}>
            <ImageSingle
              element={element}
              i={i}
              state={this.props.state}
              singleFileChangedHandler={this.singleFileChangedHandler}
              singleFileUploadHandler={this.props.singleFileUploadHandler}
              selectedFile={this.state[`selectedFile${i}`]}
              editElement={this.editElement}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
              removeImg={this.props.removeImg}
            />
          </div>
        )
      } else if (element.type === 'imageDouble'){
        return (
          <div className='postElement' key={i}>
            <ImageDouble
              element={element}
              i={i}
              state={this.props.state}
              singleFileChangedHandler={this.singleFileChangedHandler}
              singleFileUploadHandler={this.props.singleFileUploadHandler}
              selectedFileA={this.state[`selectedFile${i}a`]}
              selectedFileB={this.state[`selectedFile${i}b`]}
              editElement={this.editElement}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
              removeImg={this.props.removeImg}
            />
          </div>
        )
      } else if (element.type === 'sectionHeader'){
        return (
          <div className='postElement' key={i}>
            <SectionHeader
              element={element}
              i={i}
              editElement={this.editElement}
              handleChange={this.handleChange}
              viewDraft={this.viewDraft}
              deleteElement={this.deleteElement}
            />
          </div>
        )
      }
      else {
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