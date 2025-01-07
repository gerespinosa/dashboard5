'use client'
import React, {useEffect, useState} from 'react'
import { getUser } from '@/utils/getUser'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Avatar from './ui/Avatar'

const Navbar = () => {

    const params = useParams()
    const userId = params.userid
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const getUserInfo = async () => {
          const userInfo = await getUser(userId as string)
          setUser(userInfo)
        }
        getUserInfo()
      }, [setUser])

      function handleLogOut () {
        sessionStorage.removeItem('token')
        router.push('/auth/login')
      }

      return (
        <div className='h-[100vh] w-[5%] bg-primary flex flex-col justify-end items-center py-[8px]'>
            
            <div className='flex flex-col gap-4 items-center justify-center'>
                
                {/* LogOut Btn */}
                <Image src={'/icons/logout.svg'}
                height={24}
                width={24}
                alt='logout'
                onClick={handleLogOut}
                />

                {/* Avatar or First Letter */}
                <Avatar user={user} />

            </div>
            

        </div>
      )
}

export default Navbar