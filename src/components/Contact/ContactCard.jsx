import React from 'react'

import ContactDelete from './ContactDelete'

const ContactCard = (props) => {
  return (
    <>
      <div className="contact-card">
        <h2>{props.contact.name}</h2>
        <h3>{props.contact.title}</h3>
        <p>{props.contact.linkedin}</p>
        <p>{props.contact.email}</p>
        { props.contact.gaGrad === true ?
          <p>GA Grad</p>
          :
          <br />
        }
      </div>
    </>
  )
}

export default ContactCard