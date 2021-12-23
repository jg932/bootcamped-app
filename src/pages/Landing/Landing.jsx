import React from 'react'
import { Link } from 'react-router-dom'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../../styles/Landing.css"




const Landing = ({user}) => {
  return (
    <>
    <div className="landing-page">
      <div className="landing-elements">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_vw2a6ckt.json"
          style={{width: "500px", height: "400px"}}
          background="transparent"
          speed="1"
        ></lottie-player>
        { user ?
        <div></div>
          :
          <div className="landing-button-container">
            <button><Link to="/signup">Sign Up</Link></button>
            <button><Link to="/login">Log In</Link></button>
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default Landing