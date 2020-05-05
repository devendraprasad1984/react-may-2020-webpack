import React from 'react';

export const Modal = ({title, contents,titleColor,contentColor, show, ok, close}) => {
    return <div style={{display: (show ? 'inline-block' : 'none')}} className='overlay'>
        <div className='overlay-content'>
            <h1 style={{color:titleColor||'black',opacity:'.65'}}>{title}</h1>
            <div style={{color:contentColor||'black',opacity:'.65'}}>{contents}</div>
        </div>
        <div className='button-row'>
            <button className='btn grey' onClick={ok}>Ok</button>
            <button className='btn red' onClick={close}>Cancel</button>
        </div>
    </div>
}