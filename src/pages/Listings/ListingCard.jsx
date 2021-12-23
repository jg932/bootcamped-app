import '../../styles/Listing.css'
import '../../styles/Card.css'
import '../../styles/index.css'

import { Link } from 'react-router-dom'


const ListingCard = (props) => {
  const listing = props.listing
  return (
    <div className="listing-card">
      <Link to={`/listings/${props.listing._id}`} >
      <div className="card-header-listing">
        <h1>{props.listing.name}</h1>
        <h2>{props.listing.jobTitle}</h2>
      </div>
      </Link>
    </div>
  )
}

export default ListingCard