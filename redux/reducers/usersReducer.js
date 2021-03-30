import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  users: [],
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.users}
    case 'SET_USERS_LIST':
      return {...state, users: action.payload}
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}
    default:
      return state
  }
}

export default usersReducer