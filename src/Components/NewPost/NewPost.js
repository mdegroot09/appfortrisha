import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import NewPostElements from '../NewPostElements/NewPostElements'

class NewPost extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      postTitle: {title: ''},
      selectedFile: null,
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

  removeImg = (stateName) => {
    this.setState({[stateName]: ''})
  }

  singleFileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]});
   };

  singleFileUploadHandler = (stateName, btnID, selectedFile) => {
    const data = new FormData();
  // If file selected
    if ( selectedFile ) {
      data.append( 'profileImage', selectedFile, selectedFile.name );
      let element = document.getElementById(btnID)
      element.style.display = 'none'
      axios.post( '/profile-img-upload', data, {
        headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
      .then( ( response ) => {
        element.style.display = 'static'
        if ( 200 === response.status ) {
          // If file size is larger than expected.
          if( response.data.error ) {
            if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              // this.ocShowAlert( 'Max size: 2MB', 'red' );
              console.log('File is too large. Must be under 10MB')
            } else {
              console.log( response.data );
              // If not the given file type
              // this.ocShowAlert( response.data.error, 'red' );
            }
          } else {
            // Success
            let fileName = response.data;
            this.setState({[stateName]: fileName.location})
            console.log( 'fileName', fileName );
            // this.ocShowAlert( 'File Uploaded', '#3089cf' );
          }
        }
      }).catch( ( error ) => {
        // If another error
        // this.ocShowAlert( error, 'red' );
        console.log('error:', error)
      });
    } else {
      // if file not selected throw error
      // this.ocShowAlert( 'Please upload file', 'red' );
      console.log('No file uploaded. Please upload a file.')
    }
  }

  publishPost = (elements, family, makeup, food) => {
    if (!family && !makeup && !food){
      alert('At least one of the tab options must be checked.')
    } else {
      let date = Date.parse(new Date())
      let obj = {
        elements: elements, 
        family: family,
        makeup: makeup,
        food: food,
        postTitle: this.state.postTitle.title, 
        imageMain: this.state.imageMain,
        date: `${date}`
      }
      axios.post('/api/createpost', obj)
      .then(res => {
        console.log('res:', res)
        let {post_id} = res.data
        this.props.history.push(`/`)
      })
      .catch(err => console.log('err:', err))
    }
  }

  // ShowAlert Function
  // ocShowAlert = ( message, background = '#3089cf' ) => {
  //   let alertContainer = document.querySelector( '#uploadSuccess' )
  //   let alertEl = document.createElement( 'div' )
  //   let textNode = document.createTextNode( message );
  //   alertEl.setAttribute( 'class', 'alert-pop-up' );
  //   $( alertEl ).css( 'background', background );
  //   alertEl.appendChild( textNode );
  //   alertContainer.appendChild( alertEl );
  //   setTimeout( function () {
  //     $( alertEl ).fadeOut( 'slow' );
  //     $( alertEl ).remove();
  //   }, 3000 );
  //  };

  render() {
    let {title} = this.state.postTitle

    return(
      <div className='homeMainDiv'>
        <div className='postElement'>
          {!this.state.postTitle.editDraft 
            ?
            <h1 className='sectionTitle' style={{cursor: 'pointer'}} onClick={() => this.updateTitleView(true)}>
              {title ? title : 'Untitled Post'}
            </h1>
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
                  Preview
              </button>
            </div>
          }
        </div>
        {/* Show either a picture or picture uploader */}
        {this.state.imageMain 
          ? 
          <div className='postElement'>
            <img className='newPostImg' style={{marginBottom: '10px'}} src={this.state.imageMain} alt='new post'/> 
            <button 
              className='viewMoreBtn' style={{margin: '0', backgroundColor: 'red'}}
              onClick={() => this.setState({imageMain: ''})}>
              Remove
            </button>
          </div>
          :         
          <div className="postElement">
            {/* Alert box*/}
            <div id="uploadSuccess"></div>
            <div>
              <h3 className='newPostHeader'>Main Image Upload</h3>
              <p style={{margin: '0 0 5px 0'}}>Upload Size Limit: 10MB</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="file" onChange={this.singleFileChangedHandler} style={{width: '200px', marginBottom: '10px'}}/>
              <button className="viewMoreBtn" id='uploadMain' onClick={() => this.singleFileUploadHandler('imageMain', 'uploadMain', this.state.selectedFile)} style={{margin: '0'}}>Upload</button>
            </div>
          </div>
        }
        <NewPostElements
          singleFileUploadHandler={this.singleFileUploadHandler}
          state={this.state}
          removeImg={this.removeImg}
          publishPost={this.publishPost}
        />
      </div>
    );
   }
  }

  export default withRouter(NewPost);