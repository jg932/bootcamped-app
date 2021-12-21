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
  const [name, setName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [description, setDescription] = useState('')

  const formData = {
    name: name,
    jobTitle: jobTitle,
    description: description,
    createdBy: props.user
  }

  const handleCreateListing = async (event) => {
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
      <Header title="Add a Job Post"/>
      <ListingForm 
        name={name}
        setName={setName}

        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        
        description={description}
        setDescription={setDescription}
        
        handleCreateListing={handleCreateListing}
      />
    </div>
  )
}

export default CreateListing