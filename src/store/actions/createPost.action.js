import {
  SET_TITLE,
  SET_DESCRIPTION,
  SET_TEXT,
  SET_TAG,
  ADD_TAG,
  DELETE_TAG,
  CLEAR_FORM_POST,
} from '../reducers/createPost.reducer'

export const setTitlePost = (title) => {
  return {
    type: SET_TITLE,
    title,
  }
}

export const setDescriptionPost = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  }
}

export const setTextPost = (text) => {
  return {
    type: SET_TEXT,
    text,
  }
}

export const setTagPost = (tag) => {
  return {
    type: SET_TAG,
    tag,
  }
}

export const addTagPost = (tag) => {
  return {
    type: ADD_TAG,
    tag,
  }
}

export const deleteTagPost = (tag) => {
  return {
    type: DELETE_TAG,
    tag,
  }
}

export const clearFormPost = () => {
  return {
    type: CLEAR_FORM_POST,
  }
}
