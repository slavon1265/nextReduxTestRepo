import {setUsersListAction} from "../actions/users";

export const fetchUsers = () => {
  return async dispatch => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    dispatch(setUsersListAction(users))
  }
}