import React from "react"
import { Link } from 'react-router'

const VerifyInstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center border border-gray-700">

        {/* Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "linear-gradient(135deg, #6C63FF, #3B82F6)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Account Created 🎉
        </h1>

        <p className="text-gray-300 mb-4">
          A verification link has been sent to your email address.
          Please click the link to verify your account.
        </p>

        {/* ✅ Spam Warning */}
        <div className="flex items-start gap-2.5 text-left px-4 py-3 rounded-xl mb-5"
          style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9v4M12 17h.01" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-sm font-medium" style={{ color: "#EAB308" }}>
              Check your Spam / Junk folder!
            </p>
            <p className="text-xs mt-1" style={{ color: "#A16207" }}>
The verification email may land in your Spam or Junk folder. If you don't see it in your inbox, please check there.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          After verifying your email, you can login to your account.
        </p>

        <Link
          to="/login"
          className="inline-block px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #6C63FF, #3B82F6)" }}
        >
          Go to Login →
        </Link>

      </div>

    </div>
  )
}

export default VerifyInstruction
