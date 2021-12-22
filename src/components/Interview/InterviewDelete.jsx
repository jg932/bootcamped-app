import React from "react"

const InterviewDelete = (props) => {
  const showDelBtn = props.user && props.user.profile === props.interview.user._id

  return (
    <div className="interactions">
      {showDelBtn &&
        <button onClick={() => props.handleDeleteInterview(props.interview._id)}>
          Delete
        </button>
      }
    </div>
  )
}

export default InterviewDelete