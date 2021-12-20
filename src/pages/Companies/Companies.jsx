import React, { useState, useEffect } from 'react'
import styles from './Companies.module.css'
import CompanyCard from './CompanyCard'
import Header from '../../components/Header'
import { getAllCompanies, updateCompany, deleteCompany } from '../../services/companyService'

const Companies = (props) => {
  const [companies, setCompanies] = useState([])

  const handleDeleteCompany = async (companyId) => {
    try {
      await deleteCompany(companyId)
      setCompanies(companies.filter((company) => company._id !== companyId))
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchAllCompanies = async () => {
      const companyData = await getAllCompanies()
      setCompanies(companyData)
      console.log(companyData)
    }
    fetchAllCompanies()
    return () => { setCompanies([]) }
  }, [])

  return (
    <div className="layout">
      <Header title="All Companies" />
      {/* {companies?.map((company) => (
        <CompanyCard
          company={company}
          key={company._id}
          user={props.user}
          handleDeleteCompany={handleDeleteCompany}
        />
      ))} */}
    </div>
  )
}

export default Companies