'use client'
import axios from 'axios'
import React from 'react'

const Login = () => {

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newFormData = new FormData(e.currentTarget) 

          const email = newFormData.get('email')
          const password = newFormData.get('password')

          const response = await axios.post('/api/auth/login', { 
            email, 
            password 
          })

          if(response){
            window.location.href = ('/dashboard')
        }else{
            window.location.href = ('/auth/signup')
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