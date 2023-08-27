import { 
  POST_FETCH_RES, 
  POST_FETCH_ERROR, 
  POST_FETCH_REQ, 
  CATEGORY_FETCH_RES, 
  CATEGORY_FETCH_REQ, 
  CATEGORY_FETCH_ERROR, 
  POST_DETAIL_RES, 
  POST_DETAIL_REQ, 
  POST_DETAIL_ERROR, 
  CATEGORY_DETAIL_RES, 
  CATEGORY_DETAIL_REQ, 
  CATEGORY_DETAIL_ERROR,
  RESET_CATEGORIES,
  POST_FILTERED_ERROR,
  POST_FILTERED_RES,
  POST_FILTERED_REQ
} from "./actionType"
let  baseUrl = 'https://nytimes.alifdzarif.xyz/'


export const resetCategories = () => {
  return {
    type: RESET_CATEGORIES
  }
}

export const fetchPostRes = (payload) => {
  return {
    type: POST_FETCH_RES,
    payload
  }
}

export const fetchPostReq = () => {
  return {
    type: POST_FETCH_REQ,
  }
}

export const fetchPostError = (payload) => {
  return {
    type: POST_FETCH_ERROR,
    payload
  }
}

export const detailPostRes = (payload) => {
  return {
    type: POST_DETAIL_RES,
    payload
  }
}

export const detailPostReq = () => {
  return {
    type: POST_DETAIL_REQ,
  }
}
export const detailPostError = (payload) => {
  return {
    type: POST_DETAIL_ERROR,
    payload
  }
}

export const filterPostError = (payload) => {
  return {
    type: POST_FILTERED_ERROR,
    payload
  }
}

export const filterPostRes = (payload) => {
  return {
    type: POST_FILTERED_RES,
    payload
  }
}

export const filterPostReq = () => {
  return {
    type: POST_FILTERED_REQ,
  }
}


export const fetchCategoryRes = (payload) => {
  return {
    type: CATEGORY_FETCH_RES,
    payload
  }
}

export const fetchCategoryReq = () => {
  return {
    type: CATEGORY_FETCH_REQ,
  }
}

export const fetchCategoryError = () => {
  return {
    type: CATEGORY_FETCH_ERROR,
  }
}

export const detailCategoryRes = (payload) => {
  return {
    type: CATEGORY_DETAIL_RES,
    payload
  }
}

export const detailCategoryReq = () => {
  return {
    type: CATEGORY_DETAIL_REQ,
  }
}

export const detailCategoryError = () => {
  return {
    type: CATEGORY_DETAIL_ERROR,
  }
}


export const fetchPostAsync = () => {
  let url = baseUrl + 'posts';

  return (dispatch, getState) => {
    dispatch(fetchPostReq())
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const action = fetchPostRes(data)
        dispatch(action)
      })
      .catch((err) =>
        console.log(err, '<<<<<<<<<<<<<<<<< error')
      )
  }
}

export const filteredPost = (option) => {
  let url = baseUrl + 'posts';
  
  if(option) {
    url += `?category=${option}` 
  }

  return (dispatch, getState) => {
    dispatch(fetchPostReq())
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const action = filterPostRes(data)
        dispatch(action)
      })
      .catch((err) =>
        console.log(err, '<<<<<<<<<<<<<<<<< error')
      )
  }
}

export const fetchCategoryAsync = () => {
  return (dispatch, getState) => {
    dispatch(fetchCategoryReq())
    fetch(baseUrl + "categories", {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const action = fetchCategoryRes(data)
        dispatch(action)
      })
      .catch((err) => {
        fetchCategoryError(err)
      }
      )
  }
}

export const fetchPostDetailAsync = (postId) => {
  let url = baseUrl + 'posts/' + postId

  return (dispatch, getState) => {
    dispatch(fetchPostReq())
    fetch(url,  {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const action = detailPostRes(data)
        dispatch(action)
      })
      .catch((err) =>
        fetchPostError(err)
      )
  }
}

export const fetchCategoryDetailAsync = (catId) => {
  return (dispatch, getState) => {
    dispatch(fetchPostReq())
    fetch(baseUrl + "categories/" + catId,  {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const action = detailCategoryRes(data)
        dispatch(action)
      })
      .catch((err) =>
        fetchPostError(err)
      )
  }
}