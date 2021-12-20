import styles from './Listings.module.css'

import { Link } from 'react-router-dom'
import ListingActions from './ListingActions'


const ListingCard = (props) => {
  return (
    <div className="listing-card">
      <div className="card-header">
        {props.listing.name}
        <ListingActions {...props}/>
      </div>
    </div>
  )
}

export default ListingCard