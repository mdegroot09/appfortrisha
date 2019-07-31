import React, {Component} from 'react'
import axios from 'axios'
import $ from 'jquery'
import NewPostElements from '../NewPostElements/NewPostElements'

class NewPost extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      postTitle: {title: ''},
      selectedFile: null,
      selectedFiles: null,
      imageMain: ''
    }
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

  singleFileChangedHandler = ( event ) => {
    this.setState({
     selectedFile: event.target.files[0]
    });
   };

  singleFileUploadHandler = (  ) => {
    const data = new FormData();
  // If file selected
    if ( this.state.selectedFile ) {
      data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
      axios.post( '/profile-img-upload', data, {
        headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
      .then( ( response ) => {
        if ( 200 === response.status ) {
          // If file size is larger than expected.
          if( response.data.error ) {
            if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              this.ocShowAlert( 'Max size: 2MB', 'red' );
            } else {
              console.log( response.data );
              // If not the given file type
              this.ocShowAlert( response.data.error, 'red' );
            }
          } else {
            // Success
            let fileName = response.data;
            this.setState({imageMain: fileName.location})
            console.log( 'fileName', fileName );
            this.ocShowAlert( 'File Uploaded', '#3089cf' );
          }
        }
      }).catch( ( error ) => {
        // If another error
        this.ocShowAlert( error, 'red' );
      });
    } else {
      // if file not selected throw error
      this.ocShowAlert( 'Please upload file', 'red' );
    }
  }

  // ShowAlert Function
  ocShowAlert = ( message, background = '#3089cf' ) => {
    let alertContainer = document.querySelector( '#upload-alert' )
    let alertEl = document.createElement( 'div' )
    let textNode = document.createTextNode( message );
    alertEl.setAttribute( 'class', 'alert-pop-up' );
    $( alertEl ).css( 'background', background );
    alertEl.appendChild( textNode );
    alertContainer.appendChild( alertEl );
    setTimeout( function () {
      $( alertEl ).fadeOut( 'slow' );
      $( alertEl ).remove();
    }, 3000 );
   };

  render() {
    let {title} = this.state.postTitle

    return(
      <div className='homeMainDiv'>
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
        <div className="imageMainUpload">
          {/* Alert box*/}
          <div id="upload-alert"></div>
          <div className="card-header">
            <h3 className='newPostHeader'>Image Upload</h3>
            <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size Limit: 10MB</p>
          </div>
          <div className="card-body">
            <input type="file" onChange={this.singleFileChangedHandler}/>
            <div className="mt-5">
              <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload</button>
            </div>
          </div>
        </div>
        {this.state.imageMain ? <img className='newPostImg' src={this.state.imageMain} alt='new post'/> : <></>}
        <NewPostElements/>
      </div>
    );
   }
  }

  export default NewPost;