import styles from './Listings.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ListingForm = (props) => {
  return (
    <>
      <form className="create-form">
        <label>Enter Job Post Info</label>
        <input
          required
          autoComplete="off"
          name="name"
          placeholder="Company Name"
        />
        <input
          required
          autoComplete="off"
          name="jobTitle"
          placeholder="Job Title or Similar"
        />
        <input
          required
          autoComplete="off"
          name="description"
          placeholder="All the Details (i.e.requirements, submission info, etc)"
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/listings">Back</Link>
    </>
  )
}

export default ListingForm