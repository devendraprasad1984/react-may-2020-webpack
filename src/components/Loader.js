import React from 'react';

export default function Loader({msg}){
    msg=typeof msg==="undefined"?'':msg;
    return (
      <div>
          <span>Spinner goes here</span>
          <h1>{'Please wait while loading, '+msg+'...'}</h1>
      </div>
    );
}