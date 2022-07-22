import React from 'react';
import BtnMenu from './BtnMenu';
import {LogoMenuMain} from './LogoMenuMain';
import "./MenuBarr.css";

export const MenuBar = () => {
  return (
    <>
        <section>
            
            <div className='logo-main-menu'>
                <LogoMenuMain  />
            </div>

            <div className='menu-section'>
                <BtnMenu tittle='Cómo funciona' href='#' />
                <BtnMenu tittle='Iniciar Sesión' href='#'/>
            </div>
        
        </section>
    </>
  )
};
