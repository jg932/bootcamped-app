import styles from './Listings.module.css'

import { Link } from 'react-router-dom'


const ListingCard = (props) => {
  return (
    <div className="listing-card">
      <div className="card-header">
        {props.listing.name}
        <button
          onClick={() => props.handleDeleteListing(props.post._id)}
        >Delete</button>
      </div>
    </div>
  )
}

export default ListingCard