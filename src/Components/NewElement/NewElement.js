import React, {Component} from 'react'

export default class NewElement extends Component {
  constructor(){
    super()
    this.state = {
      options: [
        {type: 'sectionHeader', imgURL: 'https://simplejoys.s3.amazonaws.com/Section%20Header-1565388208417.jpg'},
        {type: 'paragraph', imgURL: 'https://simplejoys.s3.amazonaws.com/paragraph-1565388243454.jpg'}, 
        {type: 'quote', imgURL: 'https://simplejoys.s3.amazonaws.com/quote-1565388269768.jpg'},        
        {type: 'imageLeft', imgURL: 'https://simplejoys.s3.amazonaws.com/imageLeft-1565388291401.jpg'},
        {type: 'imageRight', imgURL: 'https://simplejoys.s3.amazonaws.com/imageRight-1565388315323.jpg'},
        {type: 'imageSingle', imgURL: 'https://simplejoys.s3.amazonaws.com/imageSingle-1565388334636.jpg'},
        {type: 'imageDouble', imgURL: 'https://simplejoys.s3.amazonaws.com/imageDouble-1565388353233.jpg'}
      ]
    }
  }

  addElement = (type) => {
    let obj = {}
    switch (type){
      case 'sectionHeader':
        obj = {type: 'sectionHeader', text: ''}
        return this.props.addElement(obj)
      case 'paragraph':
        obj = {type: 'paragraph', text: ''}
        return this.props.addElement(obj)
      case 'quote':
        obj = {type: 'quote', quote: '', person: ''}
        return this.props.addElement(obj)
      case 'imageLeft':       
        obj = {type: 'imageLeft', url: '', text: ''}
        return this.props.addElement(obj)
      case 'imageRight': 
        obj = {type: 'imageRight', url: '', text: ''}
        return this.props.addElement(obj)
      case 'imageSingle':
        obj = {type: 'imageSingle', url: ''}
        return this.props.addElement(obj)
      case 'imageDouble': 
        obj = {type: 'imageDouble', url1: '', url2: ''}
        return this.props.addElement(obj)
    }
  }

  render(){
    let showOptions = this.state.options.map((option, i) => {
      return (
        <div className='newElement' key={i}
          onClick={() => this.addElement(option.type)}>
            <img className='dropdownImg' src={option.imgURL} alt="element preview"/>
        </div>
      )
    })

    return (
      <div className='showOptions'>
        {showOptions}
      </div>
    )
  }
}