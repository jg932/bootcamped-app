import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Card.css"

const CompanyCard = (props) => {
  console.log(props)
  return (
   <div className="company-card">
     <Link to={`/companies/${props.company._id}`}>
      <div className="card-header">
        <h1>{props.company.name}</h1>
      </div>
     </Link>
   </div>
  )
}

export default CompanyCard