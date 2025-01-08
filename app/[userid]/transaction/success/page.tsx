'use client'
import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    useEffect(() => {
        setInterval(() => {
            router.back()
        }, 3000)
    }, [])


  return (
    <div className='bg-primary flex flex-col justify-center items-center h-[100vh]'>
        <h2 className='text-3xl font-semibold text-acccent text-center'>Transaction successfully created</h2>
    </div>
  )
}

export default page