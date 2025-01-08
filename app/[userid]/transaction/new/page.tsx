'use client'
import React from 'react'
import {useParams, useRouter} from 'next/navigation'
import axios from 'axios'
import { categories } from '@/lib/categories'

const page = () => {

    const params = useParams()
    const userId = params.userid
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const desc = formData.get('desc')
        const amount = parseFloat(formData.get('amount') as string)
        const category = formData.get('category')
        
        const res = await axios.post(`/api/${userId}/transaction/new`, { 
            desc,
            amount,
            category,
            userId
          })

        if(res.status === 200){
            router.push(`/${userId}/transaction/success`)
        }
    }

  return (
    <div className='mx-auto bg-white w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col w-full h-[100vh] p-8 gap-2 items-center justify-center'>
            <input type="text" placeholder='Description' name='desc' 
            className='w-full text-white bg-primary rounded-md outline-none shadow-md placeholder:text-white p-2' />
            <div className='flex w-full gap-2'>
              <input type="number" placeholder='Amount (EUR)' name='amount' step="0.01" 
              className='w-full text-white bg-primary rounded-md outline-none shadow-md placeholder:text-white p-2' />
              {/* <input type="text" placeholder='Category' name='category' 
              className='w-full text-white bg-primary rounded-md outline-none shadow-md placeholder:text-white p-2' /> */}
              <select name="category" id="category"
              className='w-full text-white bg-primary rounded-md outline-none shadow-md placeholder:text-white p-2'>
                {categories.map((category) => {
                  return (
                    <option key={category.name} value={category.image}>{category.name}</option>
                  )
                })}
              </select>
            </div>
            <button type='submit'
            className={'bg-primary w-full text-white font-semibold p-2 rounded-md shadow-md hover:scale-105 transition-transform duration-300'}>
                Create
            </button>
        </form>
    </div>
  )
}

export default page