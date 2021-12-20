import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CompanyForm from "./CompanyForm";
import Header from "../../components/Header";

import { createCompany } from "../../services/companyService";

const CreateCompany = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [website, setWebsite] = useState('')
  const [structure, setStructure] = useState('')

  const formData = {
    name: name,
    location: location,
    website: website,
    structure: structure,
    user: props.user
  }

  console.log(name, location)

  const handleCreateCompany = async (e) => {
    e.preventDefault()
    try {
      const newCompany = await createCompany(formData)
      console.log('New Company Data: ', newCompany)
      navigate('/companies')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header title='Add a Company' />
      <CompanyForm
        name={name}
        setName={setName}
        location={location}
        setLocation={setLocation}
        website={website}
        setWebsite={setWebsite}
        structure={structure}
        setStructure={setStructure}
        handleCreateCompany={handleCreateCompany}
      />
    </div>
  )
}

export default CreateCompany