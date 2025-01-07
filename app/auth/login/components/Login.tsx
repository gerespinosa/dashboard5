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