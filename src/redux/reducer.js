const initialState = {
  posts: [],
  username: '',
  showLogin: false,
  showRegister: false
}

const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_SHOWLOGIN = 'UPDATE_SHOWLOGIN';
const UPDATE_SHOWREGISTER = 'UPDATE_SHOWREGISTER';

export function updatePosts(posts){
  return {
      type: UPDATE_POSTS,
      payload: posts
  }
}

export function updateUsername(username){
  return {
      type: UPDATE_USERNAME,
      payload: username
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
  const {type, payload} = action
  switch(type) {
    case UPDATE_POSTS: 
      return {...state, posts: payload}
    case UPDATE_USERNAME:
      return {...state, username: payload}
    case UPDATE_SHOWLOGIN:
      return {...state, showLogin: payload}
    case UPDATE_SHOWREGISTER:
      return {...state, showRegister: payload}
    default :
      return state
  }
}