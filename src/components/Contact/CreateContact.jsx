import React, { useState } from 'react'

const CreateContact = (props) => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [email, setEmail] = useState('')
  const [gaGrad, setGaGrad] = useState(false)

  const formData = {
    name: name,
    title: title,
    linkedin: linkedin,
    email: email,
    gaGrad: gaGrad,
    user: props.user.profile
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.handleCreateContact(formData)   
    props.setToggleNew(false)
  }

  const handleCheck = e => {
    const checked = e.target.checked
    checked
    ? setGaGrad(true)
    : setGaGrad(false)
  }

   return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="contact-prompt">
        <label>Enter Contact's Info</label>
      </div>
      <input
        type="text"
        required
        autoComplete='off'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="form-border"></div>
      <input
        type="text"
        autoComplete='off'
        placeholder='Title'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="form-border"></div>
      <input
        type="text"
        autoComplete='off'
        placeholder='LinkedIn URL'
        name='linkedin'
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <div className="form-border"></div>
      <input
        type="text"
        autoComplete='off'
        placeholder='E-mail Address'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="form-border"></div>
      <label>GA Grad?</label>
      <input
        type="checkbox"
        name="gaGrad"
        value={gaGrad}
        onChange={(e) => handleCheck(e)}
      />
      <div className="border"/>
      <button type="submit">Add Contact</button>

    </form>
  )
}

export default CreateContact