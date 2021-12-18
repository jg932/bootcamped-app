import { Router } from 'express'
import * as companyCtrl from '../controllers/companies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/', companyCtrl.index)
router.get('/:id', companyCtrl.show)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, companyCtrl.create)
router.put('/:id', checkAuth, companyCtrl.update)
router.delete('/:id', checkAuth, companyCtrl.delete)
router.post("/:id/contacts", checkAuth, companyCtrl.createContact)
router.delete("/:companyId/contacts/:contactId", checkAuth, companyCtrl.deleteContact)
router.post("/:id/interview", checkAuth, companyCtrl.createInterview)
router.delete("/:companyId/interviews/:interviewId", checkAuth, companyCtrl.deleteInterview)


export {
    router
}
