'use client'
import React, { useState } from 'react';
import ProfilePicUpdate from './components/ProfilePicUpdate';
import axios from 'axios';
import { useParams } from 'next/navigation';

const Page = () => {
  const [imageUrl, setImageUrl] = useState(null); 
  const params = useParams()
  const userId = params.userid

  const handleImageUpload = (url: React.SetStateAction<null>) => {
    setImageUrl(url); 
  };

  const handleImageChange = async () => {
      console.log('Puñeta',userId, imageUrl)
      const res = await axios.post(`/api/${userId}/profile`, {userId, imageUrl})
      
      console.log(res)
  }

  return (
    <div className='flex flex-col p-[8px] w-full'>
      <ProfilePicUpdate onUpload={handleImageUpload} /> 
      
      {imageUrl && (
        <div>
          <h3>Profile Picture Updated:</h3>
          <img src={imageUrl} alt="New profile pic" style={{ width: '300px' }} />
          <h2>{imageUrl}</h2>
          <button onClick={handleImageChange}>Save</button>
        </div>
      )}

      
    </div>
  );
};

export default Page;
