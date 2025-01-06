'use client'
import axios from 'axios'
import React from 'react'

const Login = () => {

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget) 

          const email = formData.get('email')?.toString()
          const password = formData.get('password')?.toString()

          try {
            const response = await axios.post('/api/auth/login', { email, password });
    
            if (response.data) {
                window.location.href = '/dashboard';
            } else {
                console.error(response.data?.message || 'Unexpected error');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
                  
    }

  return (
    <form onSubmit={handleSubmit}
    className='flex flex-col gap-2'>
        <input type="text" placeholder='email' name='email'
        className='bg-gray-200 w-[200px] p-2 outline-none' />

        <input type="password" placeholder='Password' name='password'
        className='bg-gray-200 w-[200px] p-2 outline-none' />

        <button type='submit'
        className='bg-primary text-white p-2 w-[100px] rounded-md shadow-md'>
            Submit
        </button>
    </form>
  )
}

export default Login