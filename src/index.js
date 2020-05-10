import React from 'react';
import ReactDOM from 'react-dom';
import 'toastr/build/toastr.min.css';
import {SetRouting} from './components/Routing';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {visibilityFilter, TodosObject} from './Redux/AppReducers';
import * as toastify from "toastr";

let headerStyle = {
    minHeight: '20px',
    backgroundColor: 'black',
    color: 'white',
    position: 'relative',
    width: '100%',
    top: '0',
    padding: '0.2%'
};
let todoAppReducer = combineReducers({visibilityFilter, TodosObject});
let store = createStore(todoAppReducer);
const unsubscribe = store.subscribe(() => {
    toastify.info('changing state: ' + Object.keys(store.getState()));
    console.log('changing state', store.getState());
}); //on every state change

const App = () => {
    return <div className='rightContainer'>
        <div style={headerStyle}><h1 className="left">App</h1>
            <h1 className="right">Welcome, Devendra</h1></div>
        <div><SetRouting/></div>
    </div>
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
