import React, {Component} from 'react'
import axios from 'axios'
import $ from 'jquery'
import NewPostElements from '../NewPostElements/NewPostElements'

class NewPost extends Component {
  constructor( props ) {
    super( props );
    this.state = {
     selectedFile: null,
     selectedFiles: null,
     imgURL: ''
    }
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
            this.setState({imgURL: fileName.location})
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
    let alertContainer = document.querySelector( '#oc-alert-container' )
    let alertEl = document.createElement( 'div' )
    let textNode = document.createTextNode( message );
    alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
    $( alertEl ).css( 'background', background );
    alertEl.appendChild( textNode );
    alertContainer.appendChild( alertEl );
    setTimeout( function () {
      $( alertEl ).fadeOut( 'slow' );
      $( alertEl ).remove();
    }, 3000 );
   };

  render() {
    return(
      <div className='homeMainDiv'>
        <div className="container">
          {/* Alert box*/}
          <div id="oc-alert-container"></div>
          <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
            <div className="card-header">
              <h3 style={{ color: '#555', marginLeft: '12px' }}>Image Upload</h3>
              <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size Limit: 10MB</p>
            </div>
            <div className="card-body">
              <input type="file" onChange={this.singleFileChangedHandler}/>
              <div className="mt-5">
                <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload</button>
              </div>
            </div>
          </div>
        </div>
        {this.state.imgURL ? <img className='newPostImg' src={this.state.imgURL} alt='new post'/> : <></>}
        <NewPostElements/>
      </div>
    );
   }
  }

  export default NewPost;