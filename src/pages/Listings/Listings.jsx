import './Listings.module.css'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header.jsx'
import ListingCard from './ListingCard'
import { getAllPosts, updateListing, deleteListing } from '../../services/listingService'
// import { PromiseProvider } from 'mongoose'

const Listing = (props) => {
  const [listings, setListings] = useState([])

  const handleDeletePost = async (postId) => {
    try {
      await handleDeletePost(postId)
      setListings(listings.filter((post) => post._id !== postId))
    } catch (error) {
      throw error
    }
  }

  // const handleUpdateListing = async (postId) => {
  //   try {

  //   } catch (error) {
  //     throw error
  //   }
  // }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const listingData = await getAllPosts()
      setListings(listingData)
    } 
    fetchAllPosts()
    return () => { setListings([]) }
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
          user={props.user}
          // handleUpdateListing={handleUpdateListing}
          handleDeletePost={handleDeletePost}

        />
        ))}
      </div>
    </>
  )
}

export default Listing