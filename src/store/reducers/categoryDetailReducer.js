import { CATEGORY_DETAIL_ERROR, CATEGORY_DETAIL_REQ, CATEGORY_DETAIL_RES, RESET_CATEGORIES } from "../action/actionType"

const initialState = {
  categories: [],
  loading: false,
  error: null
}

export default function categoryDetailReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_DETAIL_REQ:
      return {
        ...state,
        loading: true
      }
    case CATEGORY_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CATEGORY_DETAIL_RES:
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    case RESET_CATEGORIES:
      return {
        ...state,
        categories: []
      }
    default:
      return state
  }
}