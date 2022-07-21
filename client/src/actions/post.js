import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES
} from './types';

// Get posts
export const getPosts = () => async dispatch => {
    try {
        console.log("POO POO")
        const res = await axios.get('/api/posts');
        console.log("PEE PEE");
        console.log(res.data);
        
        dispatch( {
            type: GET_POSTS,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusTest, status: err.response.status}
        })
    }
}


// Add Like
export const addLike = id => async dispatch => {
  try {
      console.log(id)
      const res = await axios.put(`/api/posts/like/${id}`);
      console.log("POOP HEAD 2")

      console.log(res.data);
      
      dispatch( {
          type: UPDATE_LIKES,
          payload: { id, likes: res.data }
      })
  } catch(err) {
      dispatch({
          type: POST_ERROR,
          payload: {msg: err.response.statusTest, status: err.response.status}
      })
  }
}

// Remove Like
export const removeLike = id => async dispatch => {
  try {
      const res = await axios.put(`/api/posts/unlike/${id}`);
      console.log(res.data);
      
      dispatch( {
          type: UPDATE_LIKES,
          payload: { id, likes: res.data }
      })
  } catch(err) {
      dispatch({
          type: POST_ERROR,
          payload: {msg: err.response.statusTest, status: err.response.status}
      })
  }
}

// Get post
export const getPost = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
  
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

