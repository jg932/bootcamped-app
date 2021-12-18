import styles from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import * as LottiePlayer from "@lottiefiles/lottie-player";

//Assets
import Logo from '../../assets/images/logo.jpeg'


const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-elements">
        <img className="logo-splash" src={Logo} alt="bootcamped logo"></img>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          width="300px"
          background="transparent"
          speed="1"
        ></lottie-player>
        <div className="landing-button-container">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing
