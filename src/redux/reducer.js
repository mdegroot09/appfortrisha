const initialState = {
  posts: [],
  userID: '',
  showLogin: false,
  showRegister: false
}

const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_USERID = 'UPDATE_USERID';
const UPDATE_SHOWLOGIN = 'UPDATE_SHOWLOGIN';
const UPDATE_SHOWREGISTER = 'UPDATE_SHOWREGISTER';

export function updatePosts(posts){
  return {
      type: UPDATE_POSTS,
      payload: posts
  }
}

export function updateUserID(id){
  return {
      type: UPDATE_USERID,
      payload: id
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
    case UPDATE_USERID:
      return {...state, userID: payload}
    case UPDATE_SHOWLOGIN:
      return {...state, showLogin: payload}
    case UPDATE_SHOWREGISTER:
      return {...state, showRegister: payload}
    default :
      return state
  }
}