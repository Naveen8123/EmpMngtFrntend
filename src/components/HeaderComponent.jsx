import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

const HeaderComponent = ({ isLogged, setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged(false);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand Name */}
        <a className="navbar-brand" href="/home">
          SRI MANJUNATHA CATERING SERVICE
        </a>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link me-3" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-3"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item " href="/newBooking">
                    Wedding Catering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/orderStatus">
                    Engagement
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/newBooking">
                    Birthday Party
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/orderStatus">
                    House Warming Function
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/newBooking">
                    Corporate Catering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/orderStatus">
                    Marriage Reception
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Book Order */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-3"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Book Order
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item " href="/newBooking">
                    New Order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/orderStatus">
                    Order Status
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="/#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="/#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          {!isLogged? (

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/login">
                Login
              </a>
            </li>
          </ul>): (
            <>
            <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
