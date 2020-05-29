import React, {useRef} from 'react';
import {connect} from 'react-redux';
import * as allActions from "../Redux/AppActions";
import * as toasify from "toastr";
import {enums} from "../Redux/enums";

const ReduxTodo = (props) => {
    let act=allActions.todoActions();
    let {dispatch,TodosReducer}=props;
    let runtimeText=useRef();
    let todoDispatch = () => {
        // Every time the state changes, log it
        dispatch({type: enums.ADD_TODO, text: 'new text'});
        dispatch(act.addTodo('hello this is again text add by addToDo function'));
        dispatch(act.addTodo('new text_OK FINE I am doing really well'));
    }
    let markAllComplete = () => {
        dispatch({type: enums.COMPLETE,index:1});
        // dispatch({type: 'COMPLETE_TODO_ALL',index:-1000});
        dispatch(act.completeAllTodo(-1000));
        // setCanPrint(true);
    }
    let undoAllComplete = () => {
        dispatch(act.undoAllTodo());
    }
    let printListing=()=>{
        // if(!canPrint) return;
        // let todos=[...props.TodosObject.map(x=>JSON.parse(JSON.stringify(x)))];
        let todos=TodosReducer;
        console.log('inside printing',todos);
        return todos.map((x,i)=><div key={'id_div_'+i} style={{fontSize:'12px',fontWeight:'bolder',lineHeight:'1.1'}}>
            <button className={x.completed?'btn yellow':'btn green'} disabled={x.completed} onClick={() => doneToDo(i)}><i className="large hand point right outline icon"></i></button>
            <span style={{textDecoration:x.completed?'line-through':'none',width:'500px'}}>{x.text} - {x.completed?'DONE':'Pending'}</span>
            <button className={x.completed?'btn gray right':'btn red right'} disabled={x.completed} onClick={() => deleteToDo(i)}>X</button>
        </div>);
    }
    let deleteToDo=(index)=>{
        dispatch(act.delTodo(index));
        toasify.error('deleted');
    }
    let doneToDo=(index)=>{
        dispatch(act.doneTodo(index));
        toasify.error('completed');
    }
    let handleInput=(e)=>{
        let {value}=e.target;
        console.log(e.target,value);
    }
    let addRunTimeTextToDo=()=>{
        let inp=runtimeText.current.value;
        dispatch({type: 'ADD_TODO', text: inp});
        runtimeText.current.value='';
        runtimeText.current.focus();
        toasify.success('added');
    }
    return (
        <div>
            <h1 className="ribbon">React Redux central state test</h1>
            <button className='btn' onClick={() => todoDispatch()}>Add Bulk Todos</button>
            <button className='btn' onClick={() => markAllComplete()}>Mark All</button>
            <button className='btn' onClick={() => undoAllComplete()}>UNDO</button>
            <div>
                <span>Add Text</span>
                <input ref={runtimeText} onChange={(e)=>handleInput(e)}/>
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
// export default connect(mapStateToProps,mapDispatchToProps)(ReduxTodo);

export default connect((state,ownProps)=>{
    let {TodosReducer}=state; //destructure object from combine reducer functions and thats gonna be the returned object also
    return{
        TodosReducer
    }
})(ReduxTodo);

