import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="nav-bar">
            Welcome, {user.name}
           {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <Link id="logo" to="/companies">Companies</Link>
            <Link to="/listings">Job Listings</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
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
