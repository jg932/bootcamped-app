import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import '../../styles/Card.css'

const PostActions = (props) => {
  // function UpdateListing(props) {
  //   const location = useLocation()
  //   const formElement = useRef()

  //   const [formData, setFormData] = useState(location.state.listing)

  //   const handleChange = (event) => {
  //     setFormData({...formData, [event.target.name]: event.target.value })
  //   }
  //   const handleSubmit = event => {
  //     event.preventDefualt()
  //     props.handleUpdateListing(formData)
  //   }

  // }
  

  return (
    <div className="interactions">
      {/* <button
        onClick={() => props.updateListing(props.post._id)}
      >Update</button> */}
      <button
        onClick={() => props.deletePost(props.post._id)}
      >Delete</button>
    </div>
  )
}

export default PostActions