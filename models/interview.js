import mongoose from 'mongoose'

const interviewSchema = new mongoose.Schema({
  interviewer:{
    type: String
  },
  communication:{
    type: String
  },
  vibe:{
    type: String
  },
  tip:{
    type: String
  },
  techInterview:{
    type: String
  }
})

const Interview = mongoose.model('Interview', interviewSchema)

export { Interview }