import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
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

// Get post
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${id}`);
        
        
        dispatch( {
            type: GET_POST,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusTest, status: err.response.status}
        })
    }
}


// Add post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
      console.log("I am a lady")
      const res = await axios.post('/api/posts', formData);
      console.log("I am a man.")

      dispatch( {
          type: ADD_POST,
          payload: res.data
      })
      dispatch(setAlert('Post Created', 'success'))
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

// Delete Post
export const deletePost = id => async dispatch => {
  try {
      const res = await axios.delete(`/api/posts/${id}`);
      console.log(res.data);
      
      dispatch( {
          type: DELETE_POST,
          payload: id
      })
      dispatch(setAlert('Post Removed', 'success'))
  } catch(err) {
      dispatch({
          type: POST_ERROR,
          payload: {msg: err.response.statusTest, status: err.response.status}
      })
  }
}





// // Get post
// export const getPost = (id) => async (dispatch) => {
//     try {
//       const res = await axios.get(`/api/posts/${id}`);
  
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       });
//     } catch (err) {
//       dispatch({
//         type: POST_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   };


// Add comment
export const addComment = (postId, formData) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);
  
        dispatch( {
            type: ADD_COMMENT,
            payload: res.data
        })
        dispatch(setAlert('Comment Added', 'success'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusTest, status: err.response.status}
        })
    }
  }

  // Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
    
    try {
        const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
  
        dispatch( {
            type: REMOVE_COMMENT,
            payload: commentId
        })
        dispatch(setAlert('Comment Removed', 'success'))
    } catch(err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusTest, status: err.response.status}
        })
    }
  }
  