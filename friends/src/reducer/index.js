import {
  SUBMITTING, SUBMITTING_SUCCESS, SUBMITTING_FAILURE,
  GETTING_FRIENDS, GETTING_FRIENDS_SUCCESS, GETTING_FRIENDS_FAILURE
} from '../actions'

const initialState = {
  friends: [],
  isLoading: false,
  error: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMITTING:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case SUBMITTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      }
    case SUBMITTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    /**Here are the CASES for getting a list of friends from the server  */

    case GETTING_FRIENDS:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case GETTING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        isLoading: false,
        error: ''
      }
    case GETTING_FRIENDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}