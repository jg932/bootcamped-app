import styles from './Listings.module.css'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header.jsx'
import ListingCard from './ListingCard'
import { getAllPosts } from '../../services/listingService'

const Listings = () => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
    } 
    fetchAllPosts()
  }, [])

  return (
    <>
      <div className="layout">
        <Header />
        <Link to="/listings/create">Create new listing</Link>
        
      </div>
    </>
  )
}

export default Listings