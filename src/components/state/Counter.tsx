import { useReducer } from "react";
type counterState = {
    count: number;
};

type updateAction = {
    type: "increament" | "decreament";
    payload: number;
};
type resetAction = {
    type: "reset";
};
// this called descrimitaed unions (very important to know and practice)
type actionCounter = updateAction | resetAction;
const intitialState = {
    count: 0,
};
const reducer = (state: counterState, action: actionCounter) => {
    switch (action.type) {
        case "increament":
            return { count: state.count + action.payload };
        case "decreament":
            return { count: state.count - action.payload };
        case "reset":
            return intitialState;
        default:
            return state;
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, intitialState);
    return (
        <>
            count:{state.count}
            <button
                onClick={() => dispatch({ type: "increament", payload: 10 })}
            >
                Increament 10
            </button>
            <button
                onClick={() => dispatch({ type: "decreament", payload: 10 })}
            >
                Decreament 10
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
};
export default Counter;
