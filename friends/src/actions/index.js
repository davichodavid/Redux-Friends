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
        payload: localStorage.setItem('token', res.payload)
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: SUBMITTING_FAILURE,
        payload: err
      })
    })
}