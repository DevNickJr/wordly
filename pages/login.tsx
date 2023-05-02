import React from 'react'

// AdMIN Login page
// style with tailwind
const Login = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col gap-8 items-center justify-center w-full flex-1 px-4 md:px-20 text-center max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-800">Admin Login</h1>
                <form className="flex flex-col gap-4 items-center justify-center w-full px-4 text-center">
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-bordered input w-full text-sm"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-bordered input w-full text-sm"
                    />
                    <button className="btn">Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login