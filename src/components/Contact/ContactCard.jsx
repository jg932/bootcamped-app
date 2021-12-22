import React from 'react'

import ContactDelete from './ContactDelete'

const ContactCard = (props) => {
  console.log(props)
  return (
    <div className="contact-card">
      {props.contact.name}
    </div>
  )
}

export default ContactCard