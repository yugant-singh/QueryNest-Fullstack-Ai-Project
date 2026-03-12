import {Router} from 'express'
import { register } from '../controllers/auth.controller.js'
import { registerValidation } from '../validators/auth.validators.js'

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post('/register', registerValidation,  register)



export default authRouter