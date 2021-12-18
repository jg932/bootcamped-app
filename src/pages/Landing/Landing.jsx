import styles from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

//Assets
import Logo from '../../assets/images/logo.jpeg'


const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-elements">
        <img className="logo-splash" src={Logo} alt="bootcamped logo"></img>
        <img className="mobile-logo" src={      } alt=""></img>
        <div className="landing-button-container">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing
