import { POST_FILTERED_ERROR, POST_FILTERED_REQ, POST_FILTERED_RES } from "../action/actionType";

const initialState = {
  posts: [],
  loading: false,
  error: null
}

export default function postFilterReducer(state = initialState, action) {
  switch (action.type) {
    case POST_FILTERED_REQ:
      return {
        ...state,
        loading: true
      }
    case POST_FILTERED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case POST_FILTERED_RES:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    default:
      return state
  }
}