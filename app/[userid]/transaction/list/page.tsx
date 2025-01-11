'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import axios from 'axios'
import TransactionsList from './components/TransactionsList'
import Image from 'next/image'

const page = () => {

    const params = useParams()
    const userId = params.userid
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // Get transactions
    useEffect(() => {
        setIsLoading(true)
        const getTransactions = async () => {
        const res = await axios.post(`/api/${userId}/transaction/get`, {userId})
        const transactionsResponse = await res.data.transactions
        setTransactions(transactionsResponse)
        setIsLoading(false)
        }
        getTransactions()
    },[])


  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      {isLoading ? 
      <Image src={'/loader.gif'}
      width={128}
      height={128}
      alt='loader'
      className='m-auto' 
      unoptimized/>
      :
      <TransactionsList transactions={transactions} />
    }
    </div>
  )
}

export default page