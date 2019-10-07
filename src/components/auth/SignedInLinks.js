import React from 'react';
import { NavLink } from 'react-router-dom';

// This are the links used when the user is alreay logged in
const SignInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Principal</NavLink></li>
      <li><NavLink to='/New'>Nuevo</NavLink></li>
      <li><NavLink to='/History'>Historial</NavLink></li>
      <li><NavLink to='/Admin'>Administrar</NavLink></li>
      <li><NavLink to='/SignOut'>Salir</NavLink></li>
      <li><NavLink to='/' className="btn btn-floating waves-effect waves-light teal darken-4">AF</NavLink></li>
    </ul>
  )
}

export default SignInLinks;
