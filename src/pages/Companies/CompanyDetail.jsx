import React, { useState, useEffect } from 'react'
import styles from './Companies.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Contact from './Contact'
import HiringInfo from './HiringInfo'
import Header from '../../components/Header'
import * as companyService from '../../services/companyService'

const CompanyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [company, setCompany] = useState()
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await companyService.getCompanyById(id)
        console.log('Company Details Data:', companyData)
        setCompany(companyData)
      } catch (error) {
        throw error
      }
    }
    fetchCompany()
  }, [id])
  console.log(company?.website)
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
        {/* contact display and form here */}
      </div>
    </div>
  )
}

export default CompanyDetail