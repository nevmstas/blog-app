import * as types from './types'

// INITIAL TIMER STATE
const initialPostsState = {
    isLoading: false, 
    alert: null
}

// POSTS REDUCER
export const appReducer = (state = initialPostsState, { type, payload }) => {
  switch (type) {
    case types.SHOW_LOADER:
        return {...state, isLoading: true}
    case types.HIDE_LOADER:
        return {...state, isLoading: false}
    case types.SHOW_ALERT:
        return {...state, alert: payload}
    case types.HIDE_ALERT:
        return {...state, alert: null}
    default:
        return state;
  }
}
