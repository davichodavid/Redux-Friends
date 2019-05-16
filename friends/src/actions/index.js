import axios from 'axios';

export const SUBMITTING = 'SUBMITTING';
export const SUBMITTING_SUCCESS = 'SUBMITTING_SUCCESS';
export const SUBMITTING_FAILURE = 'SUBMITTING_FAILURE';

export const submitCredsAction = loginData => dispatch => {
  dispatch({ type: SUBMITTING });
  axios.post('http://localhost:5000/api/login', loginData)
    .then(res => {
      console.log(res)
      dispatch({
        type: SUBMITTING_SUCCESS,
        payload: localStorage.setItem('token', res.data.payload)
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: SUBMITTING_FAILURE,
        payload: `${err.status} ${err.statusText}`
      })
    })
}



export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const GETTING_FRIENDS_SUCCESS = 'GETTING_FRIENDS_SUCCESS';
export const GETTING_FRIENDS_FAILURE = 'GETTING_FRIENDS_FAILURE';

export const getFriends = friends => dispatch => {
  dispatch({ type: GETTING_FRIENDS });
  axios.get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res)
      dispatch({
        type: GETTING_FRIENDS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GETTING_FRIENDS_FAILURE,
        payload: err.data
      })
    })
}