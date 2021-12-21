import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'
import LogoDesktop from '../../assets/images/logo.jpeg'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <li><Link id="logo" to="/companies"><img src={LogoDesktop} alt="BootCamped Logo" /></Link></li>
            <li><Link to="/listings">Job Listings</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
        </nav>
      :
        <nav>
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
