import React from 'react';
import './CreateAccountForm.css';
import { InputComponent }from './InputComponent';
import { SocialRedIcon } from './SocialRedIcon';
import {ImageLog} from './ImageLog';
import imageIg from './img/ig/ig.png';
import imageFb from './img/fb/fb.svg';
import imageTw from './img/twitter/twitter.png';
import imageIN from './img/linkedin/linkedin.png';
import { MenuBar } from './MenuBar';


export const CreateAccountForm = () => {
  return (
    <>
        <div className="main-account-form">
            <MenuBar />
            <hr />
            <div className='form-section'>
                    <div className='image-log'>
                        <ImageLog />
                    </div>
                    <div className='form-box'>
                        <h1>Crear tu cuenta</h1>
                        <p>
                            Al crear una cuenta en 100 Ladrillos, aceptas el <a href='#'>Aviso de Privacidad</a>, los <a href='#'>Derechos Arco</a> y los <a href='#'>Términos y Condiciones</a>.
                        </p>
                        <br/>
                        <label>¿Cuál es tu correo electrónico</label>
                        <InputComponent placeholder='Ejemplo: tu@correo.com' />
                        <br/>
                        <label>Escribe una contraseña</label>
                        <InputComponent placeholder='Algo que puedas recordar' />

                        <div className='social-icons-section'>

                            <SocialRedIcon hrefImage='#' altImage='Facebook' srcImage={imageFb} />
                            <SocialRedIcon hrefImage='#' altImage='Instagram' srcImage={imageIg} />
                            <SocialRedIcon hrefImage='#' altImage='twitter' srcImage={imageTw} />
                            <SocialRedIcon hrefImage='#' altImage='linkedIn' srcImage={imageIN} />

                        </div>

                    </div>
                </div> 
        </div>

    </>
  )
}
