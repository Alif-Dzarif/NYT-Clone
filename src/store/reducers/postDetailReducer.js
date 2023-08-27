import { POST_DETAIL_ERROR, POST_DETAIL_REQ, POST_DETAIL_RES } from "../action/actionType";

const initialState = {
  posts: [],
  loading: false,
  error: null
}

export default function postDetailReducer(state = initialState, action) {
  switch (action.type) {
    case POST_DETAIL_REQ:
      return {
        ...state,
        loading: true
      }
    case POST_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case POST_DETAIL_RES:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    default:
      return state
  }
}