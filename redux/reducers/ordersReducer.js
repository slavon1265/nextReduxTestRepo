import {HYDRATE} from "next-redux-wrapper";

const initialState = {
  orders: [],
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.orders}
    case 'INIT_ORDERS':
      return {...state, orders: action.payload}
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]}
    default:
      return state
  }
}

export default usersReducer