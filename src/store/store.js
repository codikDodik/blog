import { configureStore } from '@reduxjs/toolkit'

//Reducers
import { getPostsListReducer } from './reducers/getPostList.reducer'
import { getPostReducer } from './reducers/getPost.reducer'
import { paginationReducer } from './reducers/pagination.reducer'
import { registerReducer } from './reducers/register.reducer'
import { authorizationUsers } from './reducers/authorizationUsers.reducer'
import { updateUserReducer } from './reducers/updateUser.reducer'
import { dataUserReducer } from './reducers/dataUser.reducer'
import { createPostReducer } from './reducers/createPost.reducer'

const store = configureStore({
  reducer: {
    postsList: getPostsListReducer,
    post: getPostReducer,
    currentPage: paginationReducer,
    register: registerReducer,
    logIn: authorizationUsers,
    updateUser: updateUserReducer,
    user: dataUserReducer,
    createPost: createPostReducer,
  },
})

export { store }
