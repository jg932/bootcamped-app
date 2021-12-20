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

    <div className="border"/>

    <div className="website-prompt">
      <label>Website</label>
    </div>
    <input
      type="text"
      name="website"
      autoComplete='off'
      placeholder='URL'
      value={props.website}
      onChange={(e) => props.setWebsite(e.target.value)}
    />

    <div className="border"/>

    <div className="structure-prompt">
      <label>Structure</label>
    </div>
    <input
      type="text"
      name="structure"
      autoComplete='off'
      placeholder='Structure'
      value={props.structure}
      onChange={(e) => props.setStructure(e.target.value)}
    />
    
    <div className="border"></div>

    <button type="submit">Submit</button>
   </form>
  )
}

export default CompanyForm