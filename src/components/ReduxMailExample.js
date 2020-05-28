import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from "../Redux/AppActions";
import TopHoc from './TopHoc';

let ReduxMailExample = (props) => {
    let {mailsList, mailsPanel, listing, selecting} = props;
    let [headerDisplay,setHeaderDisplay]=useState('Inbox');
    let [emailObject,setEmailObject]=useState({id:'',subject:'',email:'',to:'',from:''});

    let displayEmailBody=(emailObj)=>{
        let {id,subject,email,to,from}=emailObj;
        setEmailObject(emailObj);
        // toastify.info('email body to be selected '+id+subject+email+to+from);
    }

    let listEmails=()=>{
        console.log('mails list',mailsList[0]);
        return mailsList[0].map((x,i)=><div key={'list_'+i} className='line' onClick={()=>displayEmailBody(x)}><span>{x.id}</span><span>{x.from}</span><span>{x.subject}</span></div>)
    }

    let setHeaderAndList=(label)=>{
        setHeaderDisplay(label);
        listing(label);
    }

    let displayEmailSection=()=>{
        if(emailObject.subject==='') return;
        return <div>
            <h2>Subject: {emailObject.subject}</h2>
            <h2>From: {emailObject.from}</h2>
            <h3>To: {emailObject.to}</h3>
            <span dangerouslySetInnerHTML={{__html: emailObject.body}} />
        </div>
    }

    return (
        <div>
            <h1 className="ribbon">Email Redux Example</h1>
            <div className='leftAlign' style={{width: '15%'}}>
                {mailsPanel.map((x, i) => <div key={'xp_' + i}>
                    <button className='btn teal' onClick={()=>setHeaderAndList(x)}>{x}</button>
                </div>)}
            </div>
            <div className='rightAlign' style={{textAlign: 'left', width: '85%'}}>
                <h1>{headerDisplay}</h1>
                <div className='line header'><span>ID</span><span>From</span><span>Subject</span></div>
                <div>{listEmails()}</div>
                <div>
                    {displayEmailSection()}
                </div>
            </div>
        </div>
    )
}

let mapState = (state, ownProps) => {
    let {MailerListReducer, MailerPanelReducer} = state;
    console.log('MailerReducer', MailerListReducer, MailerPanelReducer);
    return {
        mailsList: MailerListReducer
        , mailsPanel: MailerPanelReducer
    }
}
let mapDispatch = (dispatch) => {
    let act = actions.mailerActions()
    return {
        listing: (label) => {
            // dispatch(act.headLabel(label));
            dispatch(act.mailList(label));
        }
        , panelling: () => dispatch(act.mailPanel())
        , selecting: () => dispatch(act.mailSelection())
    }
}

// ReduxMailExample=TopHoc(ReduxMailExample);
export default connect(mapState, mapDispatch)(TopHoc(ReduxMailExample));

