import styles from './Listings.module.css'
import React, {useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Header from '../../components/Header'
import * as listingService from '../../services/listingService'
import ListingActions from './ListingActions'

const ListingDetail = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [listing, setListing] = useState()
  
  const handleDeletePost = async (postId) => {
    try {
      await listingService.deleteListing(postId)
      navigate("/listings")
    } catch (error) {
      throw error
    }
  }

  // const handleUpdatePost = updatedListingData => {
  //   listingService.updateListing(updatedListingData)
  //   .then(updatedListing => {
  //     const newListingArray = listing?.map(listing =>
  //       listing._id === updatedListing._id ? updatedListing : listing
  //       )
  //       setListing(newListingArray)
  //       navigate('/')
  //   })
  //   }


  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingData = await listingService.getListingById(id)
        setListing(listingData)
      } catch (error) {
        throw error
      }
    }
    fetchListing()
  }, [id])
  
  return (
    <div className="layout">
      <Header title={`${listing?.name}`} />
      <div className="border"/>
      <div className="listing-details">
        <div className="listing-name">
          {listing?.name}
        </div>
        <div className="jobTitle">
          {listing?.jobTitle}
        </div>
        <div className="listing-description">
          {listing?.description}
        </div>
        <div className="listing-footer">
          <ListingActions 
          handleDeletePost={handleDeletePost}
          listing={listing} />
          </div>
        </div>
    </div>
  )
  }


export default ListingDetail