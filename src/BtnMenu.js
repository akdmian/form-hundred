import React from 'react';
import './BtnMenu.css';

function BtnMenu(props) {
  return (
    <div>

      <a className='btn-menu' href={props.href}> {props.tittle} </a>  

    </div>
  )
}

export default BtnMenu;