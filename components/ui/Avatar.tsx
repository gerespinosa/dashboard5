'use client'
import React from 'react'

const Avatar = ({user}) => {

  return (
    <>
            {user?.image ? (
                <h2>Hola</h2>
            ) : (
                <div className='rounded-full bg-green-500 w-[48px] h-[48px] flex justify-center items-center mx-auto shadow-md'>
                    <h2 className='text-3xl font-semibold'>{user?.fullname[0]}</h2>
                </div>
            )}
          </>
  )
}

export default Avatar