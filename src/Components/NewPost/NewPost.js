import React, {Component} from 'react'
import axios from 'axios';

class NewPost extends Component {
  constructor(){
    super()
    this.state = {
      newText: ''
    }
  }
  
  submitImg = () => {
    let photo = document.getElementById("image-file").files[0];
    let formData = new FormData();
    formData.append("photo", photo);
    console.log('formData:', formData, 'photo:', photo)
    // axios.post('/api/newImg', formData);
  }

  updateNewText = (text) => {
    console.log('newText:', text)
    this.setState({newText: text})
  }
  
  render(){
    return(
      <div className='homeMainDiv'>
        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
          NewPost
          <input id="image-file" type="file"/>
          <textarea type="text" style={{width: 'calc(100%-20px)', height: '200px', margin: '10px'}} onChange={(e) => this.updateNewText(e.target.value)}/>
          <button onClick={this.submitImg}>Submit</button>
        </div>
      </div>
    )
  }
}

export default NewPost