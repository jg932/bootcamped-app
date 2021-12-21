import React from 'react'
import '../../styles/Card.css'

const ContactDelete = (props) => {

  const showDelBtn = props.user && props.user.profile === props.contact.user._id

  return (
    <div className="interactions">
      {showDelBtn &&
        <button onClick={() => props.handleDeleteContact(props.contact._id)}>
          Delete
        </button>}
    </div>
  )
}

export default ContactDelete