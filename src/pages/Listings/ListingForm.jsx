import styles from './Listings.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ListingForm = (props) => {
  return (
    <>
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
        />
        <input
          required
          autoComplete="off"
          name="jobTitle"
          placeholder="Job Title or Similar"
          value={props.jobTitle}
          onChange={(event) => props.setJobTitle(event.target.value)}
        />
        <br/>
        <textArea
          required
          autoComplete="off"
          name="description"
          placeholder="All the Details (i.e.requirements, salary, submission info, etc)"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ListingForm