import { FETCH_POST, SET_POSTS } from './types';
import api from '../utils/api'

export const fetchPosts = () => async (dispatch: any) =>{
    try {
        // fetch data from a url endpoint
        const data =  await api.get('posts')
        dispatch({type: FETCH_POST, payload: data})
      } catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}