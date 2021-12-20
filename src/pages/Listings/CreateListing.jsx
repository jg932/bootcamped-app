import React from 'react'
import './Listings.module.css'

//Components
import ListingForm from './ListingForm.jsx'
import Header from '../../components/Header.jsx'

//Services
import { createListing } from '../../services/listingService'
import { useNavigate } from 'react-router'


const CreateListing = (props) => {
  const navigate = useNavigate()
  
  const 

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