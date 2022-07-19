import React from 'react';
import './SocialRedIcon.css';

function SocialRedIcon(props) {
  return (
    <div>
        
        <div className='social-icon-box'>
         <a href='#'><img className='social-icon' src={props.src}/></a>
        </div>

    </div>
  )
}

export default SocialRedIcon