import React, {useRef, memo} from 'react';
import TopHoc from "./TopHoc";

const qr = window.QRCode;

let QRApp=(props)=> {
    let qrdiv = useRef(null);
    let qrInputVal = useRef(null);
    const makeCode = () => {
        let div2loadQrIn = qrdiv.current;
        let qrInputValText = qrInputVal.current.value;
        div2loadQrIn.innerHTML = '';
        let qrcode = new qr(div2loadQrIn, {
            text: qrInputValText,
            width: 300,
            height: 300,
            colorDark: "black",
            colorLight: "white",
            correctLevel: qr.CorrectLevel.H
        });
        // qrcode.clear(); // clear the code.
        // qrcode.makeCode(qrInputValText); // make another code.
    }
    console.log('global props via top hoc',props.globalProps);
    return (
        <div>
            <h1 className="ribbon">QR Contents</h1>
            <div>
                <button className="btn black" onClick={() => makeCode()}>Generate Code</button>
                <div><input className="w3-input" type="text" id='qrInputVal' placeholder="enter text here"
                            ref={qrInputVal}/></div>
                <br/>
            </div>
            <div id='qrdiv' ref={qrdiv}></div>
        </div>
    )
}
QRApp=TopHoc(QRApp)
export default QRApp;


