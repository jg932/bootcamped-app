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
    user: props.user
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateContact(formData)
    props.setToggleNew(false)
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
      <input
        type="text"
        autoComplete='off'
        placeholder='Title'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        autoComplete='off'
        placeholder='LinkedIn URL'
        name='linkedin'
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <input
        type="text"
        autoComplete='off'
        placeholder='E-mail Address'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="checkbox"
        name="gaGrad"
        value={gaGrad}
        onChange={(e) => setGaGrad(e.target.value)}
        />
      <div className="border"/>
      <button type="submit">Add Contact</button>

    </form>
  )
}

export default CreateContact