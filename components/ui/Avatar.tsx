'use client';
import React, { useState } from 'react';
import BasicPopover from '../Popover';

const Avatar = ({ user }:any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div 
        onClick={handleClick} 
        className='rounded-full bg-accent w-[48px] h-[48px] flex justify-center items-center mx-auto shadow-md cursor-pointer'
      >
        {user?.image ? (
          <img src={user.image} alt={user.fullname} className="w-full h-full rounded-full" />
        ) : (
          <h2 className='text-3xl text-primary font-semibold'>{user?.fullname[0]}</h2>
        )}
      </div>
      
      <BasicPopover anchorEl={anchorEl} onClose={handleClose} user={user} />
    </div>
  );
};

export default Avatar;
