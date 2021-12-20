import React from 'react'
import styles from './Companies.module.css'

const CompanyCard = (props) => {
  return (
   <div className="company-card">
     <div className="card-header">
       {props.company.name}
     </div>
   </div>
  )
}

export default CompanyCard