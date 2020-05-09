import React,{useState} from 'react';
import {forms} from './globals';
import {Modal} from './Modal';
import {Accordian} from './Accordian';
import {info,error,success} from 'toastr';

export const DisplayBudgetForms = () => forms.names.map((x, id) => <Accordian key={'acc_id_'+id} counter={id} header={x}/>);
let submitBudget = () => {
    let textElms = document.getElementsByClassName('xinput');
    let xformObj = {};
    let formKeyText = '';
    for (let i = 0; i < textElms.length; i++) {
        let children = textElms[i].childNodes;
        formKeyText = children[0].innerHTML.toString();
        let allInputTexts = children[1].childNodes;
        let vals = {};
        for (let j = 0; j < allInputTexts.length; j++) {
            vals['col_' + j] = j;
            vals['val_' + j] = parseFloat(allInputTexts[j].value);
        }
        xformObj[formKeyText] = vals;
    }
    console.log(xformObj);
    success('check console, form data object has been generated, send this to server using fetch post command and handle response');
    error('contact admin');
}
export const Budget = ({title, callback}) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h1 className="ribbon">{title}</h1>
            <div>
                <button className="btn black" onClick={() => submitBudget()}>Submit test debug JB</button>
                <button className="btn red" onClick={() => info('resetting, ok!')}>Reset</button>
                <button className="btn yellow" onClick={() => {
                    setModalShow(true);
                }}>Instruction
                </button>
            </div>
            <div>
                <Modal show={modalShow} contents={'hi there'} title={'Ok! read instruction carefully'} close={() => {
                    setModalShow(false);
                }} ok={() => {
                    success('Ok we are sure, you have read');
                    setModalShow(false);
                }}/>
            </div>
            {callback()}
        </div>
    );
}
