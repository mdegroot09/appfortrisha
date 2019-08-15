import React from 'react'

export default function ImageDouble (props) {
  return (
    <>
      {props.element.viewDraft 
        ? 
        <></>
        : 
        <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0 10px 0'}}>
          <img style={{height: '50px', transform: 'rotate(90deg)'}} src="https://simplejoys.s3.amazonaws.com/left-28998_1280-1565889638819.png" alt="arrow"
            onClick={() => props.moveUp(props.i)}/>
          <img style={{height: '50px', transform: 'rotate(-90deg)', marginLeft: '100px'}} src="https://simplejoys.s3.amazonaws.com/left-28998_1280-1565889638819.png" alt="arrow"
            onClick={() => props.moveDown(props.i)}/>
        </div>
      }
      <div style={{width: 'inherit', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        {props.state[`image${props.i}a`] 
          ?
          <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          onClick={props.element.viewDraft ? () => props.editElement(props.i) : () => {}}>
            <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={props.state[`image${props.i}a`]} alt='new post'/> 
            {props.element.viewDraft 
              ?
              <></>
              :
              <button 
                className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                onClick={() => props.removeImg(`image${props.i}a`)}>
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
              <input type="file" onChange={(e) => props.singleFileChangedHandler(e, `selectedFile${props.i}a`)} style={{marginBottom: '10px', maxWidth: '190px', width: '100%'}}/>
              <button className="viewMoreBtn" id={`upload${props.i}a`} 
                onClick={() => props.singleFileUploadHandler(`image${props.i}a`, `upload${props.i}a`, props.selectedFileA)} 
                style={{margin: '0'}}>
                  Upload
              </button>
            </div>
          </div>
        }
        {props.state[`image${props.i}b`] 
          ?
          <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          onClick={props.element.viewDraft ? () => props.editElement(props.i) : () => {}}>
            <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={props.state[`image${props.i}b`]} alt='new post'/> 
            {props.element.viewDraft 
              ?
              <></>
              :
              <button 
                className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
                onClick={() => props.removeImg(`image${props.i}b`)}>
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
              <input type="file" onChange={(e) => props.singleFileChangedHandler(e, `selectedFile${props.i}b`)} style={{marginBottom: '10px', maxWidth: '190px', width: '100%'}}/>
              <button className="viewMoreBtn" id={`upload${props.i}b`} 
                onClick={() => props.singleFileUploadHandler(`image${props.i}b`, `upload${props.i}b`, props.selectedFileB)} 
                style={{margin: '0'}}>
                  Upload
              </button>
            </div>
          </div>
        }
      </div>
      {props.element.viewDraft
        ?
        <></>
        :
        <div style={{display: 'flex'}}>
          <button 
            className='viewMoreBtn' style={{margin: '10px 50px 0 0'}}
            onClick={() => {props.viewDraft(props.i)}}>
              Preview
          </button>
          <button 
            className='viewMoreBtn' style={{margin: '10px 0 0 0', backgroundColor: 'red'}}
            onClick={() => {props.deleteElement(props.i)}}>
              Delete
          </button>
        </div>
      }
    </>
  )
}