import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useFetch} from "./globals";

//hooks are called in same order and hence react can maintain that state
//always use hooks at top level of the function body, never nested or in loops
//if not in order bind useEffect with variables as array in 2nd param of hook
const ReduxPeerJS = (props) => {
    const [name, setName] = useState('Devendra');
    return (
        <div>
            <h1 className="ribbon">Redux & PeerJs Example</h1>
            <div>this is peer js tests</div>
            <span>https://www.tutorialspoint.com/webrtc/webrtc_rtcpeerconnection_apis.htm</span>
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

export default connect(mapState, mapDispatch)(ReduxPeerJS);



