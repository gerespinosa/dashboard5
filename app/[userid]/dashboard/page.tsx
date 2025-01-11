'use client'
import React, {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import { getUser } from '@/utils/getUser'
import Btn from '@/components/ui/Btn'
import axios from 'axios'
import Transactions from './components/Transactions'
import Image from 'next/image'

const page = () => {

  const params = useParams()
  const userId = params.userid
  const [user, setUser] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Get user info
  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await getUser(userId as string)
      setUser(userInfo)
    }
    getUserInfo()
  }, [setUser])

  // Get transactions
  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true)
      const res = await axios.post(`/api/${userId}/transaction/get`, {userId})
      const transactionsResponse = await res.data.transactions
      setTransactions(transactionsResponse)
      setIsLoading(false)
    }
    getTransactions()
  },[setUser])

  // Open a new window to add a transaction
  function handleOpenWindow () {
    const url = `/${userId}/transaction/new`
    const width = 600;
    const height = 400;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    const options = `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`;
    window.open(url, '_blank', options)
  }

  return (
    <div className='flex flex-col p-[8px] w-full'>

      <div className='flex w-full justify-between'>

        {/* Greetings message */}
        <div>
          <h2 className='text-3xl'><span className='text-primary font-semibold'>Hello</span> {user?.fullname}</h2>
          <p className='text-sm font-thin'>Your user ID: {user?._id}</p>
        </div>

        {/* New transaction button */}
        <Btn text='New transaction' action={handleOpenWindow} variant='large'/>
        
      </div>

      {/* Transactions block */}
      {isLoading 
      ? 
        <Image src={'/loader.gif'} 
        width={120}
        height={120}
        alt='loading'
        className='m-auto'
        unoptimized/> 
      : 
        <Transactions transactions={transactions}/>}

    </div>
  )
}

export default page