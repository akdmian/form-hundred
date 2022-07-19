import React from 'react';
import './InputComponent.css';

function InputComponent(props) {
  return (
    <div>
        
        <input placeholder={props.placeholder}></input>

    </div>
  )
}

export default InputComponent