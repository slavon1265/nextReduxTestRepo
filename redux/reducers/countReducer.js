
const initialState = {
  count: 10,
  timer: 0,
  jwt: ''
}

const countReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.payload || 0}
    case  'START_TIMER':
      return {...state, timer: action.payload}
    default:
      return state
  }
}

export default countReducer