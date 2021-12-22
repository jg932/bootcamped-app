import React from 'react'

import ContactCard from './ContactCard'

const ContactList = (props) => {
console.log(props.contacts)
  return (
    <div>
      {props?.company?.contacts?.map((contact) => (
        <ContactCard
        {...props}
        key={contact._id}
        contact={contact}
        />
      ))}
    </div>
  
  )
}

export default ContactList