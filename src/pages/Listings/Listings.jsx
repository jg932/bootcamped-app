import '../../styles/Listing.css'
import '../../styles/index.css'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header.jsx'
import ListingCard from './ListingCard'
import { getAllPosts, updateListing, deleteListing } from '../../services/listingService'


const Listing = (props) => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setListings(postData)
    console.log(postData)
    } 
    fetchAllPosts()
    return () => { setListings([]) }
  }, [])

  return (
    <>
      <div className="layout">
        <Header title = "Job Posts"/>

        <div className="create-listings-container">
          <Link to="/listings/create"><h3>Create new listing</h3></Link>
        </div>

        {listings?.map((listing) => (
          
        <ListingCard
          listing={listing}
          key={listing._id}
          user={props.user}
        />
      
      ))}
      </div>
    </>
  )
}

export default Listing