import React from 'react';
import BtnMenu from './BtnMenu';
import LogoMenuMain from './LogoMenuMain';
import "./MenuBarr.css";

function MenuBar() {
  return (
    <div>
        <section>
            
            <div>
                <LogoMenuMain  />
            </div>

            <div className='menu-section'>
                <BtnMenu tittle='Cómo funciona' href='#' />
                <BtnMenu tittle='Iniciar Sesión' href='#'/>
            </div>
        
        </section>
    </div>
  )
}

export default MenuBar