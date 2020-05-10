import React from 'react';
import {connect} from 'react-redux';
import {decrement, increment, reset} from "../Redux/AppActions";

const CounterRedux = (props) => {
    let {counter,increment,decrement,reset} = props;
    // console.log('state/dispatch', counter,increment,decrement,reset);
    return (
        <div>
            <h1 className="ribbon">Counter Redux Example</h1>
            <button className='btn blue' onClick={() => increment()}>Increment</button>
            <button className='btn teal' onClick={() => decrement()}>Decrement</button>
            <button className='btn red' onClick={() => reset()}>Reset</button>
            <h1>Changing Counter: {counter}</h1>
        </div>
    )
}
let mapState = (state, ownProps) => {
    let {CounterReducer} = state;
    console.log('state counter', state, CounterReducer);
    return {
        counter: CounterReducer
    }
}
let mapDispatch = (dispatch) => {
    return {
        increment:()=>dispatch(increment())
        ,decrement:()=>dispatch(decrement())
        ,reset:()=>dispatch(reset())
    }
}
export default connect(mapState, mapDispatch)(CounterRedux); //connect is higher order component passes state and dispatchers as props to connected component

