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
}


const show = async (req, res) => {
  console.log('showing detail page')
}

const update = async (req, res) => {
  console.log('updating data')
}

const deleteCompany = async (req, res) => {
  console.log('deleting a company');
}






export {
 create,
 index,
 show,
 update,
 deleteCompany as delete
}
