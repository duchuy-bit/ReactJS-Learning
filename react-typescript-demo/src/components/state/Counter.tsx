import React, { useReducer } from "react";

type CounterState = {
    count: number;
};
type CounterAction = {
    // type: string;
    type: "increment" | "decrement" | "reset";
    payload?: number;
};

const initialState = {
    count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "increment":
            return { count: state.count + (action.payload || 0) };
        case "decrement":
            return { count: state.count - (action.payload || 0) };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default Counter;
