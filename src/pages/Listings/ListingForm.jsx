import '../../styles/Listings.css'
import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Create.css"

const ListingForm = (props) => {
  return (
    <div className="listing-form-container">
      <form className="create-form" onSubmit={props.handleCreateListing}>
        <label>Enter Job Post Info</label>
        <br/>
        <input
          required
          autoComplete="off"
          name="name"
          placeholder="Company Name"
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
          style={{background: "white", text: "black"}}
        />
        <input
          required
          autoComplete="off"
          name="jobTitle"
          placeholder="Job Title or Similar"
          value={props.jobTitle}
          onChange={(event) => props.setJobTitle(event.target.value)}
          style={{background: "white"}}
        />
        <br/>
        <textArea
          required
          autoComplete="off"
          name="description"
          placeholder="All the Details (i.e.requirements, salary, submission info, etc)"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
          style={{width: "500px", height: "500px"}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ListingForm