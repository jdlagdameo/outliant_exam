import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#"><b>Logo.</b></a>
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                to='/home'
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/about'
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/services'
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to='/products'
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Products
              </NavLink>
            </li>

          </ul>
          <button 
            className="btn btn-outline-dark" 
            type="button">
              Call to Action
          </button>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar