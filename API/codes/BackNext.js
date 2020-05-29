import React from 'react';
import {Button} from "semantic-ui-react";

export default function BackNext(props){
    let {index,back,next}=props;
    let style={
        marginBottom:'1rem',
        paddingBottom:'5px',
        textAlign:'right'
    }
    return(
        <div style={style}>
            <Button index={index} content='Back' onClick={back} />
            <Button index={index} content='Next' className='blue' onClick={next} />
        </div>
    )
}