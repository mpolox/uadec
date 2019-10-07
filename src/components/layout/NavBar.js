import React from 'react';
import SignInLinks from '../auth/SignedInLinks'
import SignUpLinks from '../auth/SignedOutLinks'

const NavBar = () => {
  return (
    <nav className="nav-wrapper teal">
      <div className="container">
        <SignInLinks />
        <SignUpLinks />        
      </div>
    </nav>
  )
}

export default NavBar;
