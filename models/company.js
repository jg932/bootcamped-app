import mongoose from "mongoose"


const Schema = mongoose.Schema

const interviewSchema = new Schema({
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
},
  {timestamps: true }
)

const contactSchema = new Schema({
  name: { 
    type: String,
    required: true
  },
  title: {
    type: String,
  }, 
  email: {
    type: String
  },
  linkedin: {
    type: String
  },
  gaGrad: {
    type: Boolean,
    default: false
  },
  user:{type: Schema.Types.ObjectId, ref:"User"}
},
  { timestamps: true }
)

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  website: {
    type: String,
  },
  structure: {
    type: String
  },
  user:{type: Schema.Types.ObjectId, ref:"User"},
  contacts: [contactSchema],
  interview: [interviewSchema]
}, { timestamps: true })


const Company = mongoose.model("Company", companySchema)


export {
  Company
}