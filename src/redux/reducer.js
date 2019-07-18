const initialState = {
  posts: [{
    id: '',
    title: '',
    date: '',
    text: '',
    family: '',
    makeup: '',
    food: '',
    imageMain: '',
    comments: []
  }],
  userFirstName: '',
  userLastName: '',
  // userImg: 'https://lh4.googleusercontent.com/-lfM1xoFNRgs/AAAAAAAAAAI/AAAAAAAACGU/ahaBO1Z22gM/s96-c/photo.jpg',
  userImg: '',
  showLogin: false,
  showRegister: false
}

const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_USERFIRSTNAME = 'UPDATE_USERFIRSTNAME';
const UPDATE_USERLASTNAME = 'UPDATE_USERLASTNAME';
const UPDATE_USERIMG = 'UPDATE_USERIMG'
const UPDATE_SHOWLOGIN = 'UPDATE_SHOWLOGIN';
const UPDATE_SHOWREGISTER = 'UPDATE_SHOWREGISTER';

export function updatePosts(posts){
  return {
    type: UPDATE_POSTS,
    payload: posts
  }
}

export function updateUserFirstName(userFirstName){
  return {
    type: UPDATE_USERFIRSTNAME,
    payload: userFirstName
  }
}

export function updateUserLastName(userLastName){
  return {
    type: UPDATE_USERLASTNAME,
    payload: userLastName
  }
}

export function updateUserImg(userImg){
  return {
    type: UPDATE_USERIMG,
    payload: userImg
  }
}

export function updateShowLogin(bool){
  return {
    type: UPDATE_SHOWLOGIN,
    payload: bool
  }
}

export function updateShowRegister(bool){
  return {
    type: UPDATE_SHOWREGISTER,
    payload: bool
  }
}

export default function reducer(state=initialState, action) {
  console.log('state:', state, 'action:', action)
  const {type, payload} = action
  switch(type) {
    case UPDATE_POSTS: 
      return {...state, posts: payload}
    case UPDATE_USERFIRSTNAME:
      return {...state, userFirstName: payload}
    case UPDATE_USERLASTNAME:
      return {...state, userLastName: payload}
    case UPDATE_USERIMG: 
      return {...state, userImg: payload}
    case UPDATE_SHOWLOGIN:
      return {...state, showLogin: payload}
    case UPDATE_SHOWREGISTER:
      return {...state, showRegister: payload}
    default :
      return state
  }
}