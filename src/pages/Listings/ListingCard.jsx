import styles from './Listings.module.css'

import { Link } from 'react-router-dom'
import * as PostActions from './ListingActions'


const ListingCard = (props) => {
  return (
    <div className="listing-card">
      <div className="card-header">
        {props.listing.name}
        {/* <PostActions {...props}/> */}
      </div>
    </div>
  )
}

export default ListingCard