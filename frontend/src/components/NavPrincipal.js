import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function NavigationPrincipal() {
    return (
        <h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to ="/login">Inicia Sesión</Link></li>
            <li><Link to="/registro">Registrate</Link></li>
          </ul>
        </h1>
    );
  }
  
export default NavigationPrincipal;