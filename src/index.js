import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto';
import {CreateAccountForm} from './CreateAccountForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-section'>

      <CreateAccountForm />
    </div>

  </React.StrictMode>
);

reportWebVitals();
