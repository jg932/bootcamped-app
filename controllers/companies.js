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
      .populate("user")
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
      .populate("user")
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
    ).populate("user")
    return res.status(200).json(updatedCompany)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deleteCompany = async (req, res) => {
  console.log('deleting a company');
  try {
    await Company.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.companies.remove({ _id: req.params.id })
    await profile.save()
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json(error)
  }
}

const createContact = async (req, res) => {
  console.log("creating contact")
  try {
    req.body.user = req.user.profile
    const company = await Company.findById(req.params.id).populate("user")
    company.contacts.push(req.body)
    await company.save()
    const newContact = company.contacts[company.contacts.length - 1]
    const profile = await Profile.findById(req.user.profile)
    newContact.user = profile
    company.save()
    return res.status(201).json(company)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deleteContact = async (req, res) => {
  console.log('deleting a company');
  try {
    const company = await Company.findById(req.params.companyId)
    company.contacts.remove({ _id: req.params.contactId })
    await company.save()
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json(error)
  }
}

const createInterview = async (req, res) => {
  console.log("creating interview")
  try {
    req.body.added_by = req.user.profile
    const company = await Company.findById(req.params.id).populate("user")
    company.interviews.push(req.body)
    await company.save()
    return res.status(201).json(company)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const deleteInterview = async (req, res) => {
  console.log('deleting a company');
  try {
    const company = await Company.findById(req.params.companyId)
    company.interviews.remove({ _id: req.params.interviewId })
    await company.save()
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json(error)
  }
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
