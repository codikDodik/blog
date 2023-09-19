/* eslint-disable indent */
export const GET_POST = 'GET_POST'
export const CLEAR_POST = 'CLEAR_POST'

const getPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...action.article }
    case CLEAR_POST:
      return {}
    default:
      return state
  }
}

export { getPostReducer }
