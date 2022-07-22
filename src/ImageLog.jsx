import React from 'react';
import image from './img/Prueba-tecnica/Ihero-img-3x.png';
import './ImageLog.css';

export const ImageLog = () => {
  return (
    <>
      <div className='image-hero-container'>
            <img className='image-hero' src={image}/>
        </div>
    </>
  )
}

