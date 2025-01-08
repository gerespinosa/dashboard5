'use client'
import React from 'react'
import {useParams, useRouter} from 'next/navigation'
import axios from 'axios'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Description' name='desc' />
            <input type="number" placeholder='Amount (EUR)' name='amount' step="0.01" />
            <input type="text" placeholder='Category' name='category' />
            <button type='submit'
            className={'bg-primary w-[100px] text-white p-2 rounded-md shadow-md hover:scale-105 transition-transform duration-300'}>
                Create
            </button>
        </form>
    </div>
  )
}

export default page