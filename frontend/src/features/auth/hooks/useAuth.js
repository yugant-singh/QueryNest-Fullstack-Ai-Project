import { useDispatch } from 'react-redux'
import { setError, setUser, setLoading ,clearUser} from '../auth.slice'
import { register, login, getMe, logout } from '../services/auth.api'


export function useAuth() {
    const dispatch = useDispatch()

    async function handleRegister({ username, email, password }) {

        try {
            dispatch(setLoading(true))
            const data = await register({ username, email, password })

        }
        catch (err) {
            dispatch(setError(err.response?.data?.message || "Registration Failed"))
        }
        finally {
            dispatch(setLoading(false))
        }
    }
    async function handleLogin({ email, password }) {
        try {
            dispatch(setLoading(true))
            const data = await login({ email, password })
            dispatch(setUser(data.user))
        }
        catch (err) {
            dispatch(setError(err.response?.data?.message || "Login Failed"))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    async function handleGetMe (){
        try{
            dispatch(setLoading(true))
            const data  = await getMe()
            dispatch(setUser(data.user))
        }
        catch(err){
              dispatch(setError(err.response?.data?.message || "Could not be able to fetch user detail "))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

    async function handleLogOut() {
    try {
        dispatch(setLoading(true))
        await logout()
        dispatch(clearUser())       
        window.location.href = '/login'  
    }
    catch (err) {
        dispatch(setError(err.response?.data?.message || "LogOut Failed"))
    }
    finally {
        dispatch(setLoading(false))
    }
}


    return {handleRegister,handleLogin,handleGetMe,handleLogOut}
}