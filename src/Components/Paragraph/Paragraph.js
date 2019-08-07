import React from 'react'

export default function Paragraph (props) {
  let {element, i} = props
  if (element.viewDraft){
    return (            
      <div className='paragraph' style={{cursor: 'pointer'}}
      onClick={() => props.editElement(i)}>
        <h3 className='newPostHeader' style={{textAlign: 'start', marginLeft: '0'}}>
          {element.text ? element.text : `When I grow up, I want to be a paragraph.`}
        </h3>
      </div>
    )
  } else {
    return (
      <>
        <div className='quoteInput'>
          <h3 className='newPostHeader' style={{alignSelf: 'center', marginRight: '10px'}}>Paragraph:</h3>
          <textarea type='text' className='textArea' id={`text${i}`} value={element.text}
            onChange={(e) => props.handleChange(i, 'text', e.target.value)}/>
        </div>
        <div style={{display: 'flex'}}>
          <button 
            className='viewMoreBtn' style={{margin: '10px 50px 0 0'}}
            onClick={() => {props.viewDraft(i)}}>
              Preview
          </button>
          <button 
            className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
            onClick={() => {props.deleteElement(i)}}>
              Delete
          </button>
        </div>
      </>
    )
  }
}