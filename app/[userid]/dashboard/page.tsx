'use client'
import React, {useEffect, useState} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

const page = () => {

  const params = useParams()
  const userId = params.userid
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await axios.post(`/api/${userId}`, {userId})
      const userInfo = await res.data.userFound
      console.log(userInfo)
      setUser(userInfo)
    }
    getUserInfo()
  }, [setUser])

  return (
    <div>
      {/* Greetings message */}
      <div>
        <h2>Hello {user?.fullname}</h2>
        <p>Your user ID: {user?._id}</p>
      </div>
    </div>
  )
}

export default page