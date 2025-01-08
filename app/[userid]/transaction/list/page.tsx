'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import axios from 'axios'
import TransactionsList from './components/TransactionsList'

const page = () => {

    const params = useParams()
    const userId = params.userid
    const [transactions, setTransactions] = useState([])

    // Get transactions
    useEffect(() => {
        const getTransactions = async () => {
        const res = await axios.post(`/api/${userId}/transaction/get`, {userId})
        const transactionsResponse = await res.data.transactions
        setTransactions(transactionsResponse)
        }
        getTransactions()
    },[])


  return (
    <div className='w-full'>
        <TransactionsList transactions={transactions} />
    </div>
  )
}

export default page