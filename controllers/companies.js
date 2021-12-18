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


const update = async (req, res) => {
  console.log('this function is updating')
}







export {
 create,
 update,
}
