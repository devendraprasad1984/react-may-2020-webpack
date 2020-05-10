import React, {useState,useRef} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../Redux/AppActions";

const ReduxTest = (props) => {
    let {dispatch}=props;
    let [users, setUsers] = useState([]);
    let runtimeText=useRef();
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
        // setCanPrint(true);
    }
    let printListing=()=>{
        // if(!canPrint) return;
        // let todos=[...props.TodosObject.map(x=>JSON.parse(JSON.stringify(x)))];
        let todos=props.TodosObject;
        console.log('inside printing',todos);
        return todos.map((x,i)=><div key={'id_div_'+i} style={{fontSize:'10pt',fontWeight:'bolder',lineHeight:'1.3'}}>
            <span style={{textDecoration:x.completed?'line-through':'none',width:'500px'}}>{x.text} - {x.completed?'DONE':'Pending'}</span>
            <button className={x.completed?'btn gray right':'btn red right'} disabled={x.completed} onClick={() => deleteToDo(i)}>X</button>
        </div>);
    }
    let deleteToDo=(index)=>{
        dispatch({type: 'DELETE_TODO', index});
    }
    let handleInput=(e,attrs)=>{
        console.log(e,attrs);
    }
    let addRunTimeTextToDo=()=>{
        let inp=runtimeText.current.value;
        dispatch({type: 'ADD_TODO', text: inp});
        runtimeText.current.value='';
        runtimeText.current.focus();
    }
    return (
        <div>
            <h1 className="ribbon">React Redux central state test</h1>
            <button className='btn' onClick={() => changeVisibility()}>change visibility of todo</button>
            <button className='btn' onClick={() => todoDispatch()}>call todo dispatcher</button>
            <button className='btn' onClick={() => markAllComplete()}>mark all complete</button>
            <button className='btn blue' onClick={() => setCanPrint(true)}>PRINT</button>
            <div>
                <span>Add Text</span>
                <input ref={runtimeText} onChange={handleInput}/>
                <button className='btn teal' onClick={() => addRunTimeTextToDo()}>Add</button>
            </div>
            <h1>todo listing...</h1>
            {printListing()}
        </div>
    )
}
// const mapStateToProps=(state,ownProps)=>{
//     return{
//         todos:state.TodosObject //same as reducer class or function name until you define in combine reducer function call
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ReduxTest);

export default connect((state,ownProps)=>{
    let {TodosObject}=state; //destructure object from combine reducer functions and thats gonna be the returned object also
    return{
        TodosObject
    }
})(ReduxTest);

