import {combineReducers} from "redux";
import countReducer from "./reducers/countReducer";
import usersReducer from "./reducers/usersReducer";
import ordersReducer from "./reducers/ordersReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  users: usersReducer,
  orders: ordersReducer,
  jwt: (state) => ({...state, token: '123'})
})