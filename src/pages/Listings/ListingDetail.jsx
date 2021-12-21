import styles from './Listings.module.css'
import React, {useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Header from '../../components/Header'
import * as listingService from '../../services/listingService'

const ListingDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [listing, setListing] = useState()

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
    </div>
  )
}

export default ListingDetail