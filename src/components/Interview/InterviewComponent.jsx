import React, { useSate, useState } from "react"

import InterviewList from "./InterviewList"
import CreateInterview from "./CreateInterview"

import * as companyService from "../../services/companyService"

const InterviewComponent = (props) => {
  const [toggleNew, setToggleNew] = useState(false)

  const handleCreateInterview = async (formData) => {
    try {
      const updatedCompany = await companyService.createInterview(props.company._id, formData)
      props.handleUpdateCompany(updatedCompany)
    } catch (error) {
      throw error
    }
  }

  const handleDeleteInterview = async (interviewId) => {
    try {
      await companyService.deleteInterview(props.company._id, interviewId)
      props.setInterviews(props.interviews.filter(interview => interview._id !== interviewId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="interview-section">
      <div className="header">
        <h3>Interviews</h3>
      </div>
      <InterviewList {...props} />
      <div className="contact-button">
        {props.user &&
          <button onClick={() => setToggleNew(!toggleNew)}>Add a Interview</button>
        }
      </div>
      { toggleNew &&
        <CreateInterview
          {...props}
          setToggleNew={setToggleNew}
          handleCreateInterview={handleCreateInterview}
          handleDeleteInterview={handleDeleteInterview}
          handleUpdatedCompany={props.handleUpdatedCompany}
        />
      }
    </div>
  )
}

export default InterviewComponent