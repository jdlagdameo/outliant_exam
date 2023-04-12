/**
 * 
 * Components - Navbar 
 * 
 * @author: John Dave Lagdameo
 * @since: 04/13/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * +
 */
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav 
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white mt-3 mb-3">
      <div className="container p-0 ">

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarToggler" 
          aria-controls="navbarToggler" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div 
          className="collapse navbar-collapse" 
          id="navbarToggler">
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
            className="btn btn-dark" 
            type="button">
              Call to Action
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;