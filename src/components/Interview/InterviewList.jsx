import React from "react";

import InterviewCard from "./InterviewCard"

const InterviewList = (props) => {
  return (
    <div>
      {props?.company?.interview?.map((interview) => (
        <InterviewCard
          {...props}
          key={interview._id}
          interview={interview}
        />
      ))}
    </div>
  )
}

export default InterviewList