import React, { useState } from 'react'
import './Listings.module.css'

//Components
import ListingForm from './ListingForm.jsx'
import Header from '../../components/Header.jsx'

//Services
import { createListing } from '../../services/listingService'
import { useNavigate } from 'react-router'


const CreateListing = (props) => {
  const navigate = useNavigate()
  const [listing, setListing] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [description, setDescription] = useState('')

  const formData = {
    listing: listing,
    jobTitle: jobTitle,
    description: description,
    user: props.user
  }

  const handleCreatePost = async (event) => {
    event.preventDefault()
    try {
      const newListing = await createListing(formData)
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }
  return (
    <div className="layout">
      <Header />
      <ListingForm />
    </div>
  )
}

export default CreateListing