import styles from './Listings.module.css'
import { Link } from 'react-router-dom'
import ListingCard from './ListingCard'

const Listings = () => {
  return (
    <>
      <h1>[Job Listings here]</h1>
      <Link to="/listings/create">Create new listing</Link>
    </>
    
  )
}

export default Listings