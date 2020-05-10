import React, {useState} from 'react';
import {createStore, combineReducers} from 'redux';
import {visibilityFilter, TodosReducer} from '../Redux/AppReducers';
import {addTodo} from "../Redux/AppActions";


//everything is js is an object, you can assign properties to it, they can be of any type
//their must be one global state in the application
export const ReduxTest = () => {
    // export default function todoApp(state = {}, action) {
    let [users, setUsers] = useState([]);
    let [canPrint, setCanPrint] = useState(false);
    let todoAppReducer = combineReducers({visibilityFilter, todos: TodosReducer});
    //     return {
    //         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    //         todos: todos(state.todos, action)
    //     }
    // }, above line and this segment is pretty much same
    let store = createStore(todoAppReducer);
    // Note that subscribe() returns a function for unregistering the listener
    const unsubscribe = store.subscribe(() => console.log('changing state', store.getState())); //on every state change
    let changeVisibility = () => {
        setCanPrint(false);
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'});
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'DONT_RUN_AND_DISABLE'});
    }
    let todoDispatch = () => {
        // Every time the state changes, log it
        store.dispatch({type: 'ADD_TODO', text: 'new text'});
        store.dispatch(addTodo('hello this is again text add by addToDo function'));
        store.dispatch({type: 'ADD_TODO', text: 'new text_OK FINE I am doing really well'});
    }
    let stopTrackingChanges = () => {
        unsubscribe();
    }
    let markAllComplete = () => {
        store.dispatch({type: 'COMPLETE_TODO',index:1});
        store.dispatch({type: 'COMPLETE_TODO_ALL',index:-1000});
        setCanPrint(true);
    }
    let printListing=()=>{
        if(!canPrint) return;
        let todos=store.getState().todos;
        console.log('inside printing',todos);
        return todos.map(x=><div>{x}</div>);
    }
    return (
        <div>
            <h1 className="ribbon">React Redux central state test</h1>
            <button className='btn' onClick={() => changeVisibility()}>change visibility of todo</button>
            <button className='btn' onClick={() => todoDispatch()}>call todo dispatcher</button>
            <button className='btn' onClick={() => markAllComplete()}>mark all complete</button>
            <button className='btn blue' onClick={() => setCanPrint(true)}>PRINT</button>
            <button className='btn red' onClick={() => stopTrackingChanges()}>Stop State Tracking</button>
            <h1>todo listing...</h1>
            {printListing()}
        </div>
    )
}

