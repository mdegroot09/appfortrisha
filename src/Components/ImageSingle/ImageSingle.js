import React from 'react'

export default function ImageSingle (props) {
  let {element, i} = props
  return (
    <>
      {element.viewDraft 
        ? 
        <></>
        : 
        <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0 10px 0'}}>
          <img style={{height: '50px', transform: 'rotate(90deg)'}} src="https://simplejoys.s3.amazonaws.com/left-28998_1280-1565889638819.png" alt="arrow"
            onClick={() => props.moveUp(i)}/>
          <img style={{height: '50px', transform: 'rotate(-90deg)', marginLeft: '100px'}} src="https://simplejoys.s3.amazonaws.com/left-28998_1280-1565889638819.png" alt="arrow"
            onClick={() => props.moveDown(i)}/>
        </div>
      }
      {props.state[`image${i}`] 
        ?
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        onClick={element.viewDraft ? () => props.editElement(i) : () => {}}>
          <img className='newPostImg' src={props.state[`image${i}`]} alt='new post'/> 
          {element.viewDraft 
            ?
            <></>
            :
            <button 
              className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
              onClick={() => props.removeImg(`image${i}`)}>
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
            <input type="file" onChange={(e) => props.singleFileChangedHandler(e, `selectedFile${i}`)} style={{marginBottom: '10px', width: '190px'}}/>
            <button className="viewMoreBtn" id={`upload${i}`} 
              onClick={() => props.singleFileUploadHandler(`image${i}`, `upload${i}`, props.selectedFile)} 
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
            onClick={() => {props.viewDraft(i)}}>
              Preview
          </button>
          <button 
            className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
            onClick={() => {props.deleteElement(i)}}>
              Delete
          </button>
        </div>
      }
    </>
  )
}