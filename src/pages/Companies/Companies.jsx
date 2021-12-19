import React, { useState } from 'react'
import styles from './Companies.module.css'
import { Link } from 'react-router-dom'
import CompanyCard from './CompanyCard'
import Header from '../../components/Header'

const Companies = (props) => {
  const [companies, setCompanies] = useState([])
  return (
    <div className="layout">
      <Header title="All Companies" />
      {companies?.map((company) => (
        <CompanyCard
          company={company}
          key={company._id}
          user={props.user}
        />
      ))}
    </div>
  )
}

export default Companies