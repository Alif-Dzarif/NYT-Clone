import { combineReducers } from 'redux'

import categoryReducer from './categoryReducer'
import postReducer from './postReducer'
import postDetailReducer from './postDetailReducer'
import categoryDetailReducer from './categoryDetailReducer'
import postFilterReducer from './postFilterReducer'

const rootReducer = combineReducers({
  category: categoryReducer,
  post: postReducer,
  postDetail: postDetailReducer,
  categoryDetail: categoryDetailReducer,
  postFilter: postFilterReducer
})

export default rootReducer