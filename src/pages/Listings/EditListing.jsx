import { useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'

import * as listingService from '../../services/listingService'

function EditListing(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(location.state.listing)

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event =>{
    event.preventDefault()
    await listingService.updateListing(formData)
    navigate("/listings")
  }

  return (
    <div className="edit-listing-form">
      <form className="create-form" onSubmit={handleSubmit} >
        <label>Edit Post Info</label>
        <br/>
        <input
          required
          autoComplete="off"
          name="name"
          value={formData.name}
          onChange={handleChange}
          // onChange={(event) => props.setName(event.target.value)}
          style={{background: "white", text: "black"}}
        />
        <input
          required
          autoComplete="off"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          // onChange={(event) => props.setJobTitle(event.target.value)}
          style={{background: "white"}}
        />
        <br/>
        <textArea
          required
          autoComplete="off"
          name="description"
          onChange={handleChange}
          // onChange={(event) => props.setDescription(event.target.value)}
          style={{width: "500px", height: "500px"}}
        >{formData.description}</textArea>
        <button type="submit">Submit</button>
        <Link
						to="/"
					>
						Cancel
        </Link>
      </form>
    </div>
  )
}

export default EditListing