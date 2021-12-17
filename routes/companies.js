import { Router } from 'express'
import * as companyCtrl from '../controllers/companies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', companyCtrl.create)

export {
    router
}