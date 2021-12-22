import React, { useState } from "react"

const CreateInterview = (props) => {
  const [interviewer, setInterviewer] = useState("")
  const [communication, setCommunication] = useState("")
  const [vibe, setVibe] = useState("")
  const [tip, setTip] = useState("")
  const [techInterview, setTechInterview] = useState("")

  const formData = {
    interviewer: interviewer,
    communication: communication,
    vibe: vibe,
    tip: tip,
    techInterview: techInterview,
    user: props.user.profile
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.handleCreateContact(formData)
    props.setToggleNew(false)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="interview-prompt">
        <label>Enter Interviewer Info</label>
      </div>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Interviewer"
        name="interviewer" 
        value={interviewer}
        onChange={(e) => setInterviewer(e.target.value)}
      />
      <div className="form-border"></div>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Communication"
        name="communication" 
        value={communication}
        onChange={(e) => setCommunication(e.target.value)}
      />
      <div className="form-border"></div>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Vibe"
        name="vibe" 
        value={vibe}
        onChange={(e) => setVibe(e.target.value)}
      />
      <div className="form-border"></div>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Tips"
        name="tip" 
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />
      <div className="form-border"></div>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Tech Interview"
        name="techInterview" 
        value={techInterview}
        onChange={(e) => setTechInterview(e.target.value)}
      />
    </form>
  )
}

export default CreateInterview