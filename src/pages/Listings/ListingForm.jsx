// import styles from './Listings.module.css'
import React from 'react'

const ListingForm = (props) => {
  return (      
    <form className="create-form" onSubmit={props.handleCreateListing}>
      <div>
        <label>Enter Job Post Info</label>
      </div>
      <div>  
        <input
          required
          autoComplete="off"
          name="name"
          placeholder="Company Name"
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
        />
        </div>
        <div>
        <input
          required
          autoComplete="off"
          name="jobTitle"
          placeholder="Job Title or Similar"
          value={props.jobTitle}
          onChange={(event) => props.setJobTitle(event.target.value)}
        />
        </div>
        <div>
        <input
          required
          autoComplete="off"
          name="description"
          placeholder="All the Details (i.e.requirements, submission info, etc)"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
        />
        </div>
        <div> </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ListingForm