import {initOrdersAction} from "../actions/orders";

export const fetchOrders = () => {
  return async dispatch => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const orders = await data.json();

    dispatch(initOrdersAction(orders))
  }
}