import React, {Component} from 'react'
import axios from 'axios';

class NewPost extends Component {
  submitImg = () => {
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();
    formData.append("photo", photo);
    console.log('formData:', formData, 'photo:', photo)
    // axios.post('/api/newImg', formData);
  }
  
  render(){
    return(
      <div className='homeMainDiv'>
        NewPost
        <input id="image-file" type="file" />
        <button onClick={this.submitImg}>Submit</button>
      </div>
    )
  }
}

export default NewPost