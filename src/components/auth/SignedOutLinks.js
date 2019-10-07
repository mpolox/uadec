import React from 'react';
import { NavLink } from 'react-router-dom';

// This are the links used when the user is alreay logged in
const SignUpLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/SignUp'>Registrarse</NavLink></li>
      <li><NavLink to='/Help'>Ayuda</NavLink></li>
    </ul>
  )
}

export default SignUpLinks;
