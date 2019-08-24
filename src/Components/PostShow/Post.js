import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comments from '../Comments/Comments';
import {withRouter} from 'react-router-dom';
import moment from 'moment'
import axios from 'axios'

class Post extends Component {
  constructor (){
    super()
    this.state = {
      post: {
        elements: []
      },
      comments: []
    }
  }

  componentDidMount = () => {
    // Bring the scroll to the top of the page on initial render
    window.scrollTo(0, 0)

    this.getPost()
  }

  getPost = () => {
    axios.get(`/api/getpost/${this.props.match.params.id}`)
    .then(res => {
      console.log('res.data:', res.data)
      let {post} = this.state
      post.title = res.data[0].title
      post.imageMain = res.data[0].imagemain
      post.date = res.data[0].postdatetime
      post.family = res.data[0].family
      post.makeup = res.data[0].makeup
      post.food = res.data[0].food
      post.elements = res.data.map(element => {
        return {
          type: element.elementtype,
          text: element.elementtext,
          url: element.elementurl,
          url2: element.elementurl2,
          quote: element.elementquote,
          person: element.elementperson,
          viewDraft: true
        }
      })
      this.setState({post})
      axios.get(`/api/getcomments/${this.props.match.params.id}`)
      .then(res => {
        console.log('res.data:', res.data)
        this.setState({comments: res.data})
      })
    })    
  }

  addComment = (comment) => {
    let {comments} = this.state
    let {text, date} = comment
    let post_id = this.props.match.params.id

    comments.push(comment)
    this.setState({comments})

    axios.post('/api/createcomment', {text, date, post_id})
    .then(res => {
      console.log('res.data:', res.data)
      this.getPost()
    })
    .catch(err => console.log(err))
  }

  deleteComment = (id) => {
    axios.delete(`/api/deletecomment/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    let index = this.state.comments.findIndex(comments => {
      return comments.id === id
    })
    let {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
    this.getPost()
  }

  render(){
    let {post} = this.state
  
    let showElements = post.elements.map((element, i) => {
      if (element.type === 'sectionHeader'){
        return (
          <div className='postElement' style={{border: 'none'}} key={i}>
            <div className='paragraph'>
              <h3 className='newPostHeader' style={{width: '100%', textAlign: 'left', margin: '0', fontSize: '28px', fontWeight: '100'}}>
                {element.text}
              </h3>
            </div>
          </div>
        ) 
      } else if (element.type === 'paragraph'){
        return (
          <div className='postElement' style={{border: 'none'}} key={i}>
            <div className='paragraph' style={{cursor: 'pointer'}}>
              <h3 className='newPostHeader' style={{textAlign: 'start', marginLeft: '0'}}>
                {element.text}
              </h3>
            </div>
          </div>
        )
      } else if (element.type === 'quote'){
        return (
          <div className='postElement' style={{border: 'none'}} key={i}>
            <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer'}}>
              <h3 className='newPostHeader' style={{fontSize: '30px'}}>
                "{element.quote}"
              </h3>
              <h3 className='newPostHeader' style={{alignSelf: 'flex-end'}}>
                - {element.person}
              </h3>
            </div>
          </div>
        )
      } else if (element.type === 'imageLeft'){
        return (
          <div className='postElement' style={{border: 'none', cursor: 'pointer'}} key={i}>
            <div style={{display: 'flex', alignItems: 'center', width: 'inherit'}} >
              <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img className='newPostImg' style={{maxWidth: '100%'}} src={element.url} alt='new post'/> 
              </div>
              <div style={{width: '50%', marginLeft: '10px', display: 'flex', alignItems: 'center'}}>
                <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <h3 className='newPostHeader' style={{width: '100%', textAlign: 'left', marginLeft: '0'}}>
                    {element.text}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )
      } else if (element.type === 'imageRight'){
        return (
          <div className='postElement' style={{border: 'none', cursor: 'pointer'}} key={i}>
            <div style={{display: 'flex', alignItems: 'center', width: 'inherit'}} >
              <div style={{width: '50%', display: 'flex', alignItems: 'center'}}>
                <div className='quoteInput' style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <h3 className='newPostHeader' style={{width: '100%', textAlign: 'left', marginLeft: '10px', marginRight: '10px'}}>
                    {element.text ? element.text : 'Edit me.'}
                  </h3>
                </div>
              </div>
              <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px'}}>
                <img className='newPostImg' style={{maxWidth: '100%'}} src={element.url} alt='new post'/> 
              </div>
            </div>
          </div>
        )
      } else if (element.type === 'imageSingle'){
        return (
          <div className='postElement' style={{border: 'none'}} key={i}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img className='newPostImg' src={element.url} alt='new post'/> 
            </div>
          </div>          
        )
      } else if (element.type === 'imageDouble'){
        return (
          <div className='postElement' style={{border: 'none'}} key={i}>
            <div style={{width: 'inherit', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={element.url} alt='new post'/> 
              </div>
              <div style={{maxWidth: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img className='newPostImg' style={{maxWidth: 'calc(100% - 15px)'}} src={element.url2} alt='new post'/> 
              </div>
            </div>
          </div>
        )
      }
      else {
        return (
          <div key={i}></div>
      )}
    })

    return(
      <div className='homeMainDiv'>
        <div className='homeDuoDiv'>
          <div className='homeLeft'>
            <div className='postsList'>
              <h2 className='sectionTitle'>{post.title}</h2>
              <h3 style={{margin: '0', fontSize: '20px', color: 'black'}}>
                {post.date 
                  ? moment(new Date(+post.date)).fromNow() 
                  : ''
                }
              </h3>
              <div className='showPost'>
                <div className='mainPhoto' alt="" style={{backgroundPosition: 'center top', backgroundSize: 'cover', width: '150px', height: '150px',
                  backgroundImage: `url(${post.imageMain})`}}>
                </div>                
                {showElements}
              </div>
            </div>
          </div>
          <Comments 
            comments={this.state.comments}
            addComment={this.addComment}
            deleteComment={this.deleteComment}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {posts} = state
  return {
    posts
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))