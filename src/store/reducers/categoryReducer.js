import { CATEGORY_FETCH_ERROR, CATEGORY_FETCH_REQ, CATEGORY_FETCH_RES } from "../action/actionType";

const initialState = {
  categories: [],
  loading: false,
  error: null
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_REQ:
      return {
        ...state,
        loading: true
      }
    case CATEGORY_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CATEGORY_FETCH_RES:
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    default:
      return state
  }
}