import mongoose from "mongoose"


const Schema = mongoose.Schema

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
  user:[{type: Schema.Types.ObjectId, ref:"User"}]
})


const Company = mongoose.model("Company", companySchema)


export {
  Company
}