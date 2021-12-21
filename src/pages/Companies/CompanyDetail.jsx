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
  return (
    <div className="layout">
      <Header title={`${company?.name}`} />
    </div>
  )
}

export default CompanyDetail