import React from "react";
import "../../styles/Card.css"

const InterviewCard = (props) => {
  return (
    <>
      <div className="company-card">
        <h2>{props.interview.interviewer}</h2>
        <h3>{props.interview.communication}</h3>
        <h4>{props.interview.vibe}</h4>
        <p>{props.interview.tip}</p>
        <p>{props.interview.techInterview}</p>
      </div>
    </>
  )
}

export default InterviewCard