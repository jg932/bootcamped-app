import React from 'react'
import './Listings.module.css'

//Components
import ListingForm from './ListingForm.jsx'
import Header from '../../components/Header.jsx'


const CreateListing = (props) => {

  return (
    <div className="layout">
      <Header />
      <ListingForm />
    </div>
  )
}

export default CreateListing