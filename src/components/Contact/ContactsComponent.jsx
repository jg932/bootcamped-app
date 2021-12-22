import React, { useState } from 'react'

import ContactList from './ContactList'
import CreateContact from './CreateContact'

import * as companyService from '../../services/companyService'

const ContactsCompoment = (props) => {
  const [toggleNew, setToggleNew] = useState(false)

  const handleCreateContact = async (formData) => {
    try {
      const newContact = await companyService.createContact(props.company._id, formData)
      props.setContacts([...props.contacts, newContact])
    } catch (error) {
      throw error
    }
  }

  const handleDeleteContact = async (contactId) => {
    try {
      await companyService.deleteContact(props.company._id, contactId)
      props.setContacts(props.contacts.filter(contact => contact._id !== contactId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="contact-section">
      <div className="header">
        <h3>Contacts</h3>
      </div>
      <ContactList {...props}/>
      <div className="contact-button">
      {props.user &&
            <button onClick={() => setToggleNew(!toggleNew)}>Add a Contact</button>
          }
      </div>
      { toggleNew &&
        <CreateContact
          {...props}
          setToggleNew={setToggleNew}
          handleCreateContact={handleCreateContact}
          handleDeleteContact={handleDeleteContact}
        />
      }
    </div>
  )

}

export default ContactsCompoment