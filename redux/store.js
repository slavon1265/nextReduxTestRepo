import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initState = {}

export const initStore = (store = initState) => {
  return createStore(rootReducer, store, composeWithDevTools(applyMiddleware(thunk)));
}
