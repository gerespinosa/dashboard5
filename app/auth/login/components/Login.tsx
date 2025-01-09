'use client'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {

    const router = useRouter()

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newFormData = new FormData(e.currentTarget) 

          const email = newFormData.get('email')
          const password = newFormData.get('password')

          const res = await axios.post('/api/auth/login', { 
            email, 
            password 
          })

          if(res.status === 200){
            const { token } = res.data;
            sessionStorage.setItem('token', token);
            console.log(res)
            const userID = res.data.id
            router.push(`/${userID}/dashboard`) 
          } else {
            window.location.href = ('/auth/signup')
        }         
    }

  return (
    <form onSubmit={handleSubmit}
    className='w-[50%] mx-auto flex flex-col items-start gap-2'>
       
          <label className='text-sm' htmlFor="email">eMail</label>
          <input type="text" placeholder='Enter your email' name='email'
          className='bg-gray-200 w-full  p-2 outline-primary rounded-md' />
               
          <label className='text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' name='password'
          className='bg-gray-200 w-full  p-2 outline-primary rounded-md' />
        
        
        <button type='submit'
        className='bg-primary text-white p-2 w-full rounded-md shadow-md'>
            Submit
        </button>
    </form>
  )
}

export default Login