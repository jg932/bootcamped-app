import styles from './Listings.module.css'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header.jsx'
import ListingCard from './ListingCard'
import { getAllPosts, updateListing, deleteListing } from '../../services/listingService'
import { PromiseProvider } from 'mongoose'

const Listing = () => {
  const [listings, setListings] = useState([])

  const handleDeletePost = async (postId) => {
    try {
      await handleDeletePost(postId)
      setListings(listings.filter((post) => post._id !== postId))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
    } 
    fetchAllPosts()
  }, [])

  return (
    <>
      <div className="layout">
        <Header title = "Job Posts"/>
        <Link to="/listings/create">Create new listing</Link>
        {listings?.map((listings) => (
        <ListingCard
          listings={listings}
          key={listings._id}
          user={PromiseProvider.user}
          handleDeletePost={handleDeletePost}

        />
        ))}
      </div>
    </>
  )
}

export default Listing