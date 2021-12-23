import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'

//Assets
import Logo from '../../assets/images/bootcamped img.jpeg'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="nav-bar">
            <Link to="/" className="nav-logo">
              <img 
                src={Logo} 
                alt="bootcamped logo"
                height="73px"
              ></img>
            </Link>
            <div id="logo">Welcome, {user.name} </div>
            <Link to="/companies">Companies</Link>
            <Link to="/listings">Job Listings</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
        </nav>
      :
        <nav className="nav-bar">
          <Link to="/" className="nav-logo">
            <img 
              src={Logo} 
              alt="bootcamped logo"
              height="76px"
            ></img>
          </Link>
          <Link to="/listings">Job Listings</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
