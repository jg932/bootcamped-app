import styles from './Companies.module.css'
import { Link } from 'react-router-dom'
import CompanyCard from './CompanyCard'

const Companies = () => {
  return (
    <>
      <h1>[Companies Index here]</h1>
      <Link to="/companies/create">Add a Company</Link>
    </>
  )
}

export default Companies