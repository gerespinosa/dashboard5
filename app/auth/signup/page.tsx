'use client';
import React from 'react';
import SignUp from './components/SignUp';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='w-full flex h-[100vh]'>

      {/* Image */}
      <div className='bg-[url("/city.jpg")] w-1/2 h-[100vh] bg-cover'>
        <div className='bg-primary bg-opacity-75 w-full h-full'></div>
      </div>

      {/* Login form and link */}
      <div className='w-1/2 flex flex-col justify-center gap-[28px] items-center p-2'>
        <div className='w-full flex flex-col items-center'>
          <h3 className='text-5xl font-semibold text-primary mb-[10px]'>Welcome</h3>
          <h4>Let's create your account</h4>
        </div>

        {/* SignUp Form */}
        <SignUp />

        {/* Log in link */}
        <p>Have you an account?
          <Link href='/auth/login' className='font-semibold text-primary'> Log in </Link>
        </p>
      </div>

    </div>
  );
};

export default Page;
