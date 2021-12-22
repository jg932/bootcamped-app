import styles from './Listings.module.css'

import { Link } from 'react-router-dom'
import * as ListingActions from './ListingActions'


const ListingCard = (props) => {
  const listing = props.listing
  return (
    <div className="listing-card">
      <Link to={`/listings/${props.listing._id}`} >
      <div className="card-header">
        {props.listing.name}
      </div>
      </Link>
    </div>
  )
}

export default ListingCard