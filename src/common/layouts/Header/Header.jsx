import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <NavLink exact className="nav-item nav-link" to="/auth">
              Auth
            </NavLink> */}
            <NavLink exact className="nav-item nav-link" to="/post">
              Post
            </NavLink>
            {/* <NavLink exact className="nav-item nav-link" to="/user">
              User
            </NavLink> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
