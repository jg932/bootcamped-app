import React from 'react'

import ContactDelete from './ContactDelete'

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      {props.contact.name}
    </div>
  )
}

export default ContactCard