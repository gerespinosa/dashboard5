'use client'
import React from 'react'
import SignUp from './components/SignUp'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      {/* SignUp Form */}
        <SignUp />

      {/* Log in link */}
        <p>Have you an account?
          <Link href={'/auth/login'} className='font-semibold text-primary'> Log in</Link>
        </p>
        
    </div>
  )
}

export default page