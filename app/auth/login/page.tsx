import React from 'react'
import Login from './components/Login'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <Login />
        
        <p>You don't have an account?
          <Link href={'/auth/signup'} className='font-semibold text-primary'> Sign Up</Link>
        </p>

    </div>
  )
}

export default page