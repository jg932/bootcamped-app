import styles from './Listings.module.css'

import { Link } from 'react-router-dom'
import * as PostActions from './ListingActions'


const ListingCard = (props) => {
  return (
    <div className="listing-card">
      <Link to={`/listings/${props.listing._id}`}>
      <div className="card-header">
        {props.listing.name}
        {/* <PostActions {...props}/> */}
      </div>
      </Link>
    </div>
  )
}

export default ListingCard