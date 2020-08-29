import * as types from './types'

// INITIAL TIMER STATE
const initialPostsState = {
  posts: []
}

// POSTS REDUCER
export const postsReducer = (state = initialPostsState, { type, payload }) => {
  switch (type) {
    case types.FETCH_POST:
      return{
        ...state, 
        posts: payload
      }
    case types.SET_POSTS:
      return{
        ...state, 
        posts: payload
      }
    default:
      return state
  }
}
