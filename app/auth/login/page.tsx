import React from 'react'
import Login from './components/Login'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full flex h-[100vh]'>

      {/* Image */}
      <div className='bg-[url("/city.jpg")] w-1/2 h-[100vh] bg-cover'>
          <div className='bg-primary bg-opacity-75 w-full h-full'></div>
      </div>

      {/* Login form and link */}
      <div className='w-1/2 flex flex-col justify-center gap-[28px] items-center p-2'>
        <div className='w-full flex flex-col items-center'>
          <h3 className='text-5xl font-semibold text-primary mb-[10px]'>Welcome back</h3>
          <h4>Please use your credentials to access your dashboard</h4>
        </div>

        <Login /> 
        
        <p>You don't have an account?
          <Link href={'/auth/signup'} className='font-semibold text-primary'> Sign Up</Link>
        </p>
      </div>

    </div>
  )
}

export default page