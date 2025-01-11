'use client'
import React, { useState } from 'react';
import ProfilePicUpdate from './components/ProfilePicUpdate';

const Page = () => {
  const [imageUrl, setImageUrl] = useState(null); 

  const handleImageUpload = (url: React.SetStateAction<null>) => {
    setImageUrl(url); 
  };

  return (
    <div className='flex flex-col p-[8px] w-full'>
      <ProfilePicUpdate onUpload={handleImageUpload} /> 
      
      {imageUrl && (
        <div>
          <h3>Profile Picture Updated:</h3>
          <img src={imageUrl} alt="New profile pic" style={{ width: '300px' }} />
          <h2>{imageUrl}</h2>
        </div>
      )}

      
    </div>
  );
};

export default Page;
