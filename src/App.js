import {useDispatch, useSelector} from "react-redux";

const App = () => {

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => dispatch({type: "INC", payload: 1})}>increment</button>
            <button onClick={() => dispatch({type: "DEC", payload: 1})}>decrement</button>
        </div>
  );
}

export {App};
