import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
try{
    const token  = req.cookies.token
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized',
            success: false,
            err: 'No token provided'
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    req.user = decoded
    next()

        }
        catch(err){
            return res.status(401).json({
                message: 'Unauthorized',
                success: false,
                err: 'Invalid token'
            })
        }
}

