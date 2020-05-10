import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../Redux/AppActions";

const CounterRedux = (props) => {
    let {counter,increment,decrement,reset,todo} = props;
    // console.log('state/dispatch', counter,increment,decrement,reset);
    return (
        <div>
            <h1 className="ribbon">Counter Redux Example</h1>
            <button className='btn blue' onClick={() => increment()}>Increment</button>
            <button className='btn teal' onClick={() => decrement()}>Decrement</button>
            <button className='btn red' onClick={() => reset()}>Reset</button>
            <h1>Changing Counter: {counter}</h1>
            {/*<h2>todos from other component: {todo.map(x=><div>{x.text}</div>)}</h2>*/}
        </div>
    )
}
let mapState = (state, ownProps) => {
    let {CounterReducer,TodosReducer} = state;
    console.log('state counter', state, CounterReducer);
    return {
        counter: CounterReducer
        ,todo:TodosReducer
    }
}
let mapDispatch = (dispatch) => {
    let act=actions.counterActions();
    return {
        increment:()=>dispatch(act.increment())
        ,decrement:()=>dispatch(act.decrement())
        ,reset:()=>dispatch(act.reset())
    }
}
export default connect(mapState, mapDispatch)(CounterRedux); //connect is higher order component passes state and dispatchers as props to connected component

