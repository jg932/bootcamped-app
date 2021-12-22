import React from 'react'

import ContactCard from './ContactCard'

const ContactList = (props) => {
  return (
    props.contacts?.map((contact) => (
      <ContactCard
      {...props}
      key={contact._id}
      contact={contact}
      />
    ))
  )
}

export default ContactList