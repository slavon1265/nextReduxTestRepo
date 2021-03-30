import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {startTimerAction} from "../../redux/actions/count";

const FilterBar = ({value, setValue}) => {

  const [timeoutId, setTimeoutId] = useState(0);

  let timer = useSelector(({count}) => count.timer);
  const dispatch = useDispatch();

  const btnClickHandler = () => {
    clearInterval(timeoutId)

    return async (dispatch) => {
        const id = setInterval(()=>{
          dispatch(startTimerAction(timer++))
        }, 10)
      setTimeoutId(id)
    }

  }

  return  (
  <div>
    <label htmlFor="num">
      <h3>{timer}</h3>
      <button onClick={() => clearInterval(timeoutId)}>Stop Timer</button>
      <button onClick={() => btnClickHandler()(dispatch)}>Start timer</button>
      <input name="num" value={value} onInput={({target: {value}}) => setValue(+value)} type="number"/>
    </label>
  </div>
  )
}

export default FilterBar