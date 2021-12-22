import React from 'react'
// import '../../styles/Card.css'

const ListingActions = (props) => {
  console.log(props)
  return (
    <div className="interactions">
      <button
        onClick={() => props.handleDeletePost(props.listing._id)}
      >Delete</button>
    </div>
  )
}

export default ListingActions