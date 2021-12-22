import styles from './Listings.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Create.css"

const ListingForm = (props) => {
  return (
    <>
      <form className="create-form" onSubmit={props.handleCreateListing}>
        <label>Enter Job Post Info</label>
        <input
          required
          autoComplete="off"
          name="name"
          placeholder="Company Name"
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
        />
        <input
          required
          autoComplete="off"
          name="jobTitle"
          placeholder="Job Title or Similar"
          value={props.jobTitle}
          onChange={(event) => props.setJobTitle(event.target.value)}
        />
        <input
          required
          autoComplete="off"
          name="description"
          placeholder="All the Details (i.e.requirements, submission info, etc)"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ListingForm