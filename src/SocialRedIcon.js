import React from 'react';
import './SocialRedIcon.css';

function SocialRedIcon(props) {
  return (
    <div>
        
        <div className='social-icon-box'>
         <a href={props.href}><img className='social-icon' alt={props.alt} src={props.src}/></a>
        </div>

    </div>
  )
}

export default SocialRedIcon