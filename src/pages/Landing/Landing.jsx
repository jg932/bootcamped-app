import React from 'react'
import { Link } from 'react-router-dom'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../../styles/Landing.css"

//Assets
// import Logo from '../../assets/images/bootcamped img.jpeg'


const Landing = ({user}) => {
  return (
    <>
    <div className="landing-page">
      <div className="landing-elements">
        <img 
        className="logo-splash" 
        // src={Logo} 
        alt="bootcamped logo"
        height="320px"
        ></img>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_vw2a6ckt.json"
          style={{width: "300px", height: "300px"}}
          background="transparent"
          speed="1"
        ></lottie-player>
        { user ?
          <div className="border"></div>
          :
          <div className="landing-button-container">
            <button><Link to="/signup">Sign Up</Link></button>
            <button><Link to="/signin">Sign In</Link></button>
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default Landing