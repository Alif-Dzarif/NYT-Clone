import { POST_FETCH_ERROR, POST_FETCH_REQ, POST_FETCH_RES } from "../action/actionType";
const initialState = { posts: [], loading: false, error: null }

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_FETCH_REQ:
      return {
        ...state,
        loading: true
      }
    case POST_FETCH_RES:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case POST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
