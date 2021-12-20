import React from 'react'

const CompanyForm = (props) => {
  return (
   <form className="create-form" onSubmit={props.handleCreateCompany}>
     <div className="name-prompt">
       <label>Name</label>
     </div>
     <input
      type='text'
      required
      name='name'
      autoComplete='off'
      placeholder='Name'
      value={props.name}
      onChange={(e) => props.setName(e.target.value)}
    />

    <div className="border"/>

    <div className="location-prompt">
      <label>Location</label>
    </div>
    <input
      type="text"
      required
      name="location"
      autoComplete='off'
      placeholder='City, State'
      value={props.location}
      onChange={(e) => props.setLocation(e.target.value)}
    />
   </form>
  )
}

export default CompanyForm