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
    className='flex flex-col gap-2'>
        <input type="email" placeholder='email' name='email'
        className='bg-gray-200 w-[200px] p-2 outline-none' />

        <input type="text" placeholder='First name' name='name'
        className='bg-gray-200 w-[200px] p-2 outline-none' />

        <input type="text" placeholder='Last Name' name='lastname'
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

export default SignUp