import React from 'react';
import {connect} from 'react-redux';
import {decrement, increment, reset} from "../Redux/AppActions";

const CounterRedux = (props) => {
    let {dispatch, counter} = props;
    let IncrementCounter = () => {
        dispatch(increment());
    }
    let DecrementCounter = () => {
        dispatch(decrement());
    }
    let ResetCounter = () => {
        dispatch(reset());
    }
    return (
        <div>
            <h1 className="ribbon">Counter Redux Example</h1>
            <button className='btn blue' onClick={() => IncrementCounter()}>Increment</button>
            <button className='btn teal' onClick={() => DecrementCounter()}>Decrement</button>
            <button className='btn red' onClick={() => ResetCounter()}>Reset</button>
            <h1>Changing Counter: {counter}</h1>
        </div>
    )
}
export default connect((state, ownProps) => {
    let {CounterReducer} = state;
    console.log('state counter',state,CounterReducer);
    return {
        counter: CounterReducer
    }
})(CounterRedux);

