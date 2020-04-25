import React from 'react';
import ReactDOM from 'react-dom';
import 'toastr/build/toastr.min.css';
import {SetRouting} from './components/Routing';

let headerStyle = {minHeight: '20px', backgroundColor: 'black', color: 'white',position:'relative',width:'100%',top:'0',padding:'0.2%'};
const App = () => {
    return <div className='rightContainer'>
        <div style={headerStyle}><h1 className="left">Investments App - RBS</h1>
            <h1 className="right">Welcome, Devendra</h1></div>
        <div><SetRouting/></div>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));
