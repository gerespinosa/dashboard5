'use client'
  import { getUser } from '@/utils/getUser'
  import Image from 'next/image'
  import { useParams, useRouter } from 'next/navigation'
  import { useEffect, useState } from 'react'
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
            
            <div className='flex flex-col gap-4 items-center justify-between h-full'>

                {/* Side menu */}
                <div>
                  {/* Dashboard icon */}
                    <Image src={'/icons/dashboard.svg'}
                    height={24}
                    width={24}
                    alt='dashboard'
                    className='hover:cursor-pointer'
                    onClick={() => router.push(`/${userId}/dashboard`)} />

                  {/* Transactions page icon */}
                    <Image src={'/icons/transactions.svg'}
                    height={24}
                    width={24}
                    alt='dashboard'
                    className='hover:cursor-pointer'
                    onClick={() => router.push(`/${userId}/transaction/list`)} />
   
                </div>
                
                <div className='flex flex-col justify-center items-center gap-2'>
                  {/* LogOut Btn */}
                  <Image src={'/icons/logout.svg'}
                  height={24}
                  width={24}
                  alt='logout'
                  onClick={handleLogOut}
                  className='hover:cursor-pointer'
                  />

                  {/* Avatar or First Letter */}
                  <Avatar user={user} />
                </div>

            </div>
            

        </div>
      )
}

export default Navbar