import React, { useState, useEffect } from 'react'
import styles from './Companies.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import HiringInfo from './HiringInfo'
import Header from '../../components/Header'
import * as companyService from '../../services/companyService'
import ContactsCompoment from '../../components/Contact/ContactsComponent'

const CompanyDetail = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [company, setCompany] = useState()
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await companyService.getCompanyById(id)
        setCompany(companyData)
      } catch (error) {
        throw error
      }
    }
    fetchCompany()
  }, [id])
  return (
    <div className="layout">
      <Header title={`${company?.name}`} />
      <div className="border"/>
      <div className="company-details">
        <div className='location'>
         {company?.location}
        </div>
        <div className='website'>
         <a href={`${company?.website}`} target='_blank' rel='noreferrer'>{company?.website}</a>
        </div>
        <div className='structure'>
          <label>Info: <p>{company?.structure}</p></label>
        </div>
      </div>

      <div className="interviews">
        {/* interview process display here */}
        {/* add interview form here, probably with an if statement to display it? */}
      </div>

      <div className="contacts">
        <ContactsCompoment
          user={props.user}
          company={company}
          setCompany={setCompany}
          contacts={contacts}
          setContacts={setContacts}
        />
      </div>
    </div>
  )
}

export default CompanyDetail