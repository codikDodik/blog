import { CHANGE_PAGE } from '../reducers/pagination.reducer'

export const paginationAction = (page) => {
  return {
    type: CHANGE_PAGE,
    page,
  }
}
