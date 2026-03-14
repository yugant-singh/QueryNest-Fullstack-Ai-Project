import {Router} from 'express'
import { register ,verifyEmail,login,getMe,logout} from '../controllers/auth.controller.js'
import { registerValidation ,loginValidation } from '../validators/auth.validators.js'
import {authMiddleware} from '../middleware/auth.middleware.js'

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post('/register', registerValidation,  register)
authRouter.post('/login',loginValidation, login )
authRouter.get('/get-me',authMiddleware, getMe)
authRouter.get('/logout',authMiddleware, logout)
authRouter.get('/verify-email', verifyEmail)


export default authRouter