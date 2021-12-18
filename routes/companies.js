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


export {
    router
}
