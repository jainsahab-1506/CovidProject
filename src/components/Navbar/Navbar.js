import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css';

 import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="nav navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className=" btn-col navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="btn-col nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="btn-col btn-register nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn-col nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn-col nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn-col nav-link" to="/signup">Registration</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}

export default Navbar
