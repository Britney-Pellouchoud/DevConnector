import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
        <li>
        <Navigate to="/profiles">
          Developers
        </Navigate>
        </li>
      <li>
        <Navigate to="/dashboard">
      <i className="fas fa-user"/>{' '}
      <span className="hide-sm">Dashboard</span>
        </Navigate>
        </li>
      <li>
        <a onClick={logout} href="#!">
        <i className="fas fa-sign-out-alt"></i>{' '}
        <span className="hide-sm">Logout</span>
         </a> 
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li><a href="#!">Developers</a></li>
      <li><Navigate to="/register">Register</Navigate></li>
      <li><Navigate to="/login">Login</Navigate></li>
    </ul>
  );

  
  return (
    <nav className="navbar bg-dark">
      <Navigate to="/profiles">
          Developers
        </Navigate>
      { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks}</Fragment>) }
    </nav>
  )
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
