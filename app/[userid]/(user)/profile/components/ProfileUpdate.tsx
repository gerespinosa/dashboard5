import axios from 'axios'
import React, {useState} from 'react'

const ProfileUpdate = ({userId}:any) => {

    const [isVisible, setIsVisible] = useState(false)

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const fullname = `${formData.get('name')} ${formData.get('lastname')}`
        const newPassword = formData.get('newPassword')
        const currentPassword = formData.get('currentPassword')

        const res = await axios.patch(`/api/${userId}/profile/dataUpdate`, {
            userId,
            email,
            fullname,
            newPassword,
            currentPassword
        })

        if(res.status === 200){
            setIsVisible(true)
            setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        } else {
            console.log('User not updated')
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <label className='text-sm' htmlFor='email'>New email</label>
        <input type="email" placeholder='Enter email' name='email'
        className='bg-gray-200 w-[25%] p-2 outline-primary rounded-md' />
        <label className='text-sm' htmlFor='name'>New name</label>
        <input type="text" placeholder='Enter name' name='name'
        className='bg-gray-200 w-[25%] p-2 outline-primary rounded-md' />
        <label className='text-sm' htmlFor='lastname'>New last name</label>
        <input type="text" placeholder='Enter last name' name='lastname'
        className='bg-gray-200 w-[25%] p-2 outline-primary rounded-md' />
        <label className='text-sm' htmlFor='newPassword'>New password</label>
        <input type="password" placeholder='Enter new password' name='newPassword'
        className='bg-gray-200 w-[25%] p-2 outline-primary rounded-md' />
        <label className='text-sm' htmlFor='currentPassword'>Current password</label>
        <input type="password" placeholder='Enter current password' name='currentPassword'
        className='bg-gray-200 w-[25%] p-2 outline-primary rounded-md'/>
        <div className='flex gap-2 items-center'>
            <button type='submit' className='bg-primary w-[100px] text-white p-2 rounded-md shadow-md 
            hover:scale-105 transition-transform duration-300'>Save</button>
            <p>{isVisible ? 'User updated!' : ' '}</p>
        </div>
    </form>
  )
}

export default ProfileUpdate