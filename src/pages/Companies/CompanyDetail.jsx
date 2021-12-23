import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import * as companyService from '../../services/companyService'
import ContactsCompoment from '../../components/Contact/ContactsComponent'
import "../../styles/Header.css"
import InterviewComponent from '../../components/Interview/InterviewComponent'

const CompanyDetail = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [company, setCompany] = useState()

  const handleUpdateCompany = updatedCompanyData => {
    setCompany(updatedCompanyData)
  }

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
        <InterviewComponent
          user={props.user}
          company={company}
          setCompany={setCompany}
          handleUpdateCompany={handleUpdateCompany}
        />
      </div>

      <div className="contacts">
        <ContactsCompoment
          user={props.user}
          company={company}
          setCompany={setCompany}
          handleUpdateCompany={handleUpdateCompany}
          // contacts={contacts}
          // setContacts={setContacts}
        />
      </div>
    </div>
  )
}

export default CompanyDetail