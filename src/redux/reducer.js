const initialState = {
  posts: [{}]
}

const UPDATE_POSTS = 'UPDATE_POSTS';

export function updatePosts(posts){
  return {
      type: UPDATE_POSTS,
      payload: posts
  }
}

export default function reducer(state=initialState, action) {
  console.log('state:', state, 'action:', action)
  const {type, payload} = action
  switch(type) {
    case UPDATE_POSTS: 
      return {posts: payload}
    default :
      return state
  }
}