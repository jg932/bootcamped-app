import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.module.css'


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
            <h1>Sign Up</h1>
            <p>{message}</p>
          </div>  
          <SignupForm className="register-form" {...props} updateMessage={updateMessage} />
        </div>

      </div>
      
      <div className="right-container"> 
        We can add an animation here if we want
      </div>

    </div>
  )
}

export default Signup
