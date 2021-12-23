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
    await props.handleCreateInterview(formData)
    props.setToggleNew(false)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
     <label>Interviewed by:</label>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Interviewer name"
        name="interviewer" 
        value={interviewer}
        onChange={(e) => setInterviewer(e.target.value)}
      />
      <div className="form-border"></div>
      <label>Communcation?</label>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Phone/on-site/Zoom/etc."
        name="communication" 
        value={communication}
        onChange={(e) => setCommunication(e.target.value)}
      />
      <div className="form-border"></div>
      <label htmlFor="">Overall impression/vibe:</label>
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
      <label htmlFor="">Tips?</label>
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
      <label htmlFor="">Is there a technical interview?</label>
      <input 
        type="text" 
        required
        autoComplete="off"
        placeholder="Yes/no, how many, etc."
        name="techInterview" 
        value={techInterview}
        onChange={(e) => setTechInterview(e.target.value)}
      />

      <button type="submit" className="">Submit</button>
    </form>
  )
}

export default CreateInterview