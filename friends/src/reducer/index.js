import { SUBMITTING, SUBMITTING_SUCCESS, SUBMITTING_FAILURE } from '../actions'

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
    default:
      return state;
  }
}