'use client'
import React, { useState } from 'react';
import ProfilePicUpdate from './components/ProfilePicUpdate';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Btn from '@/components/ui/Btn';
import ProfileUpdate from './components/ProfileUpdate';

const Page = () => {
  const [imageUrl, setImageUrl] = useState(null); 
  const params = useParams()
  const userId = params.userid

  const handleImageUpload = (url: React.SetStateAction<null>) => {
    setImageUrl(url); 
  };

  const handleImageChange = async () => {
      const res = await axios.post(`/api/${userId}/profile`, {userId, imageUrl})
  }

  return (
    <div className='flex flex-col gap-2 p-[8px] w-full'>
      {/* Profile pic update */}
      <ProfilePicUpdate onUpload={handleImageUpload} /> 
      
      {/* Profile pic preview */}
      {imageUrl && (
        <div className='flex flex-col gap-2'>
          <img src={imageUrl} alt="New profile pic" style={{ width: '300px', height:'300px' }} />
          <Btn action={handleImageChange} text={'Save'} variant={'small'}/>
        </div>
      )}

      {/* User data update */}
      <ProfileUpdate userId={userId} />

    </div>
  );
};

export default Page;
