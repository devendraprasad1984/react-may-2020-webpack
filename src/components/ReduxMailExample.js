import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../Redux/AppActions";
import {enums} from "../Redux/enums";

const ReduxMailExample = (props) => {
    let {mailsList, mailsPanel, listing, panelling, selecting} = props;
    let listEmails=()=>{
        console.log('mails list',mailsList[0]);
        return mailsList[0].map((x,i)=><div key={'list_'+i} className='line'><span>{x.id}</span><span>{x.from}</span><span>{x.subject}</span></div>)
    }
    return (
        <div>
            <h1 className="ribbon">Email Redux Example</h1>
            <div>
                <button className='btn' onClick={selecting}>Selection</button>
            </div>
            <div className='left' style={{width: '15%'}}>
                {mailsPanel.map((x, i) => <div key={'xp_' + i}>
                    <button className='btn teal' onClick={()=>listing(x)}>{x}</button>
                </div>)}
            </div>
            <div className='right' style={{textAlign: 'left', width: '85%'}}>
                <div className='line header'><span>ID</span><span>From</span><span>Subject</span></div>
                <div>{listEmails()}</div>
                <div>
                    body
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
        listing: (label) => dispatch(act.mailList(label))
        , panelling: () => dispatch(act.mailPanel())
        , selecting: () => dispatch(act.mailSelection())
    }
}
export default connect(mapState, mapDispatch)(ReduxMailExample);

