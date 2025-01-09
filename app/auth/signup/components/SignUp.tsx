import axios from 'axios'
import React from 'react'

const SignUp = () => {

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        
        const newFormData = new FormData(e.currentTarget)
        const email = newFormData.get('email')
        const fullname = `${newFormData.get('name')} ${newFormData.get('lastname')}`
        const password = newFormData.get('password')

        const res = await axios.post(`/api/auth/signup`, {
            fullname,
            email,
            password
        })
    }

  return (
    <form onSubmit={handleSubmit}
    className='w-[50%] mx-auto flex flex-col items-start gap-2'>
        
        <label className='text-sm' htmlFor="email">eMail</label>
        <input type="email" placeholder='Enter your email' name='email'
        className='bg-gray-200 w-full p-2 outline-primary rounded-md' />

        <label className='text-sm' htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your first name' name='name'
        className='bg-gray-200 w-full p-2 outline-primary rounded-md' />
        
        <label className='text-sm' htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='Enter your last Name' name='lastname'
        className='bg-gray-200 w-full p-2 outline-primary rounded-md' />

        <label className='text-sm' htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' name='password'
        className='bg-gray-200 w-full p-2 outline-primary rounded-md' />

        <button type='submit'
        className='bg-primary text-white p-2 w-full rounded-md shadow-md'>
            Submit
        </button>
    </form>
  )
}

export default SignUp