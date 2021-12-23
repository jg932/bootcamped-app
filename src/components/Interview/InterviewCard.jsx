import React from "react";
import "../../styles/Card.css"

const InterviewCard = (props) => {
  return (
    <>
      <div className="company-card">
        <p>Name of interviewer: {props.interview.interviewer}</p>
        <p>Communication: {props.interview.communication}</p>
        <p>Overall impression/vibe: {props.interview.vibe}</p>
        <p>Tips: {props.interview.tip}</p>
        <p>Technical interview? {props.interview.techInterview}</p>
      </div>
      <div/>
    </>
  )
}

export default InterviewCard