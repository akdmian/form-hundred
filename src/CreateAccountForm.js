import React from 'react';
import './CreateAccountForm.css';
import InputComponent from './InputComponent';

function CreateAccountForm() {
  return (
    <div>

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

        </div>

    </div>
  )
}

export default CreateAccountForm