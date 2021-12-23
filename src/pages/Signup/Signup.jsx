import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.module.css'
import Animation from '../../components/misc/Animation'
import coder from '../../assets/animation/coder.json'


const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className="signup-page">

      <div className="left-container">

        <div className="form-container">
          <div className="title-container">
            <h6>Sign Up</h6>
            <p>{message}</p>
          </div>  
          <SignupForm className="form-container" {...props} updateMessage={updateMessage} />
        </div>

      </div>

      <div className="right-container"> 
      <Animation animData={coder}></Animation>
      </div>

    </div>
  )
}

export default Signup
