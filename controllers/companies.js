import { Profile } from '../models/profile.js'
import { Company } from '../models/company.js'


const create = async (req, res) => {
 console.log('creating companies')
 try {
   req.body.added_by = req.user.profile
   const company = await new Company(req.body)
   await company.save()
   await Profile.updateOne(
     { _id: req.user.profile },
     { $push: { companies: company } }
   )
   return res.status(201).json(company)
 } catch (err) {
  return res.status(500).json(err)
 }
}

const index = async (req, res) => {
  console.log('indexing')
  try {
    const companies = await Company.find({})
      .populate("added_by")
      .sort({ createdAt: "desc"})
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(500).json(error)
  }
}


const show = async (req, res) => {
  console.log('showing detail page')
  try {
    const companies = await Company.findById(req.params.id)
      .populate("added_by")
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const update = async (req, res) => {
  console.log('updating data')
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      { new: true}
    ).populate("added_by")
    return res.status(200).json(updatedCompany)
  } catch (error) {
    return res.status(500).json(error)
  }

}

const deleteCompany = async (req, res) => {
  console.log('deleting a company');
}

const createContact = async (req, res) => {
  console.log("creating contact")
}

const deleteContact = async (req, res) => {
  console.log('deleting a company');
}

const createInterview = async (req, res) => {
  console.log("creating interview")
}

const deleteInterview = async (req, res) => {
  console.log('deleting a company');
}


export {
 create,
 index,
 show,
 update,
 deleteCompany as delete,
 createContact,
 deleteContact,
 createInterview,
 deleteInterview
}
