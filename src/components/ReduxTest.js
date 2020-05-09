import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../Redux/AppActions";

const ReduxTest = (props) => {
    let {dispatch}=props;
    let [users, setUsers] = useState([]);
    let [canPrint, setCanPrint] = useState(false);
    let changeVisibility = () => {
        setCanPrint(false);
        dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'});
    }
    let todoDispatch = () => {
        // Every time the state changes, log it
        dispatch({type: 'ADD_TODO', text: 'new text'});
        dispatch(addTodo('hello this is again text add by addToDo function'));
        dispatch({type: 'ADD_TODO', text: 'new text_OK FINE I am doing really well'});
    }
    let markAllComplete = () => {
        dispatch({type: 'COMPLETE_TODO',index:1});
        dispatch({type: 'COMPLETE_TODO_ALL',index:-1000});
        setCanPrint(true);
    }
    let printListing=()=>{
        if(!canPrint) return;
        let {todos}=props;
        console.log('inside printing',todos);
        return todos.map((x,i)=><div key={'id_div_'+i}>{x.text}</div>);
    }
    return (
        <div>
            <h1 className="ribbon">React Redux central state test</h1>
            <button className='btn' onClick={() => changeVisibility()}>change visibility of todo</button>
            <button className='btn' onClick={() => todoDispatch()}>call todo dispatcher</button>
            <button className='btn' onClick={() => markAllComplete()}>mark all complete</button>
            <button className='btn blue' onClick={() => setCanPrint(true)}>PRINT</button>
            <h1>todo listing...</h1>
            {printListing()}
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    return{
        todos:state.todos
    }
}
export default connect(mapStateToProps)(ReduxTest);
