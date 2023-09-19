/* eslint-disable indent */
export const SET_TITLE = 'SET_TITLE'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const SET_TEXT = 'SET_TEXT'
export const SET_TAG = 'SET_TAG'
export const ADD_TAG = 'ADD_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const CLEAR_FORM_POST = 'CLEAR_FORM_POST'

const initialState = {
  title: '',
  titleError: false,
  description: '',
  descriptionError: false,
  text: '',
  textError: false,
  tag: '',
  tagList: [],
}

export const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title, titleError: action.title ? false : true }
    case SET_DESCRIPTION:
      return { ...state, description: action.description, descriptionError: action.description ? false : true }
    case SET_TEXT:
      return { ...state, text: action.text, textError: action.text ? false : true }
    case SET_TAG:
      return { ...state, tag: action.tag }
    case ADD_TAG:
      return { ...state, tag: '', tagList: [...state.tagList, action.tag] }
    case DELETE_TAG:
      return { ...state, tagList: state.tagList.filter((tag) => tag !== action.tag) }
    case CLEAR_FORM_POST:
      return initialState
    default:
      return state
  }
}
