import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="nav-bar">
          <ul>
            <li>Welcome, {user.name}</li>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <li><Link id="logo" to="/companies">Companies</Link></li>
            <li><Link to="/listings">Job Listings</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
        </nav>
      :
        <nav className="nav-bar">
          <ul>
            <li><Link to="/listings">Job Listings</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
