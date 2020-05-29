import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useFetch} from "./globals";

//hooks are called in same order and hence react can maintain that state
//always use hooks at top level of the function body, never nested or in loops
//if not in order bind useEffect with variables as array in 2nd param of hook
const SimpleHooks = (props) => {
    const [name, setName] = useState('Devendra');
    const [title, setTitle] = useState('');
    const [surname, setSurname] = useState('Prasad');
    const [todoClick, setTodoClick] = useState(true);
    useEffect(() => {
        if (name === '') return;
        localStorage.setItem('formData', name);
    }, [name]);
    useEffect(() => {
        if (surname === '') return;
        setTitle(name + ' ' + surname);
    }, [surname]);

    let displayTodos = () => {
        let url = todoClick ? 'https://jsonplaceholder.typicode.com/todos' : '';
        let data = useFetch(url);
        if (url === '') data = [];
        console.log(url, data);
        if (data.length === 0) return null;
        let style = {
            height: '200px',
            overflow: 'auto',
            position: 'relative'
        }
        return (
            <div style={style}>
                <ul>
                    {!data ? 'plz wait..' : data.map(el => (
                        <li key={el.id}>{el.id} - {el.title} - {el.completed}</li>
                    ))}
                </ul>
            </div>
        );
    }
    let displayPosts = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let data = useFetch(url);
        let style = {
            height: '200px',
            overflow: 'auto',
            position: 'relative',
            lineHeight: '1.5rem'
        }
        return (
            <div style={style}>
                {!data ? 'plz wait..' : data.map(el => (
                    <div key={el.id}>
                        <h3>{el.title}</h3>
                        <p>{el.body}</p>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div>
            <h1 className="ribbon">Redux & Hooks Example</h1>
            <h2>title being set as: {title}</h2>
            <button className='btn' onClick={() => setTodoClick(!todoClick)}>Todos</button>
            {displayTodos()}
            <h1>Posts</h1>
            {displayPosts()}
        </div>
    )
}

const mapState = ({state, ownProps}) => {
    return {
        prop1: {}
    }
}
const mapDispatch = (dispatch) => {
    return {
        func1: () => {
        }
    }
}

export default connect(mapState, mapDispatch)(SimpleHooks);



