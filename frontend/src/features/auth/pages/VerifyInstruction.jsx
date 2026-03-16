import React from "react"
import {Link} from 'react-router'

const VerifyInstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-md text-center border border-gray-700">

        <h1 className="text-3xl font-bold text-white mb-4">
          Account Created 🎉
        </h1>

        <p className="text-gray-300 mb-6">
          A verification link has been sent to your email address.
          Please check your inbox and click the link to verify your account.
        </p>

        <p className="text-sm text-gray-400 mb-6">
          After verifying your email, you can login to your account.
        </p>

        <Link to="/login"className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow-lg inline-block" > Go to Login</Link>
         
       

      </div>

    </div>
  )
}

export default VerifyInstruction