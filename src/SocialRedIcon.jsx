import React from 'react';
import './SocialRedIcon.css';


export const SocialRedIcon = ({hrefImage, altImage, srcImage}) => {
  return (
    <>
        <div className='social-icon-box'>
         <a href={hrefImage}>
          <img className='social-icon' alt={altImage} src={srcImage}/></a>
        </div>
    </>
  )
}


