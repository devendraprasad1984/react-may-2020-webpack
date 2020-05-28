import React from 'react';
import {Button} from "semantic-ui-react";

export default function BackNext(props){
    let {index,back,next}=props;
    let style={
        marginTop:'2rem',
        borderTop:'2px solid lightgray',
        paddingTop:'5px'
    }
    return(
        <div style={style}>
            <Button index={index} content='Back' onClick={back} />
            <Button index={index} content='Next' className='blue' onClick={next} />
        </div>
    )
}