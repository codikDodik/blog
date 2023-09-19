/* eslint-disable indent */
export const CHANGE_PAGE = 'CHANGE_PAGE'
const quantityShowPost = 5

const initialState = {
  limit: quantityShowPost,
  offset: 0,
  page: 1,
}

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, offset: action.page * state.limit - state.limit, page: action.page }
    default:
      return state
  }
}
