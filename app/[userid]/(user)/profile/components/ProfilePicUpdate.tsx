'use client';
import axios from 'axios';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ProfilePicUpdate = ({ onUpload }: any) => { // Cambia handleUpload por onUpload
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const handleUpload = async (files: any) => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'profile'); // Asegúrate de usar el nombre correcto del preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      const imageUrl = response.data.secure_url;
      onUpload(imageUrl); // Llama a la función de callback pasando la URL
      console.log('Picture uploaded:', imageUrl);
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => handleUpload(acceptedFiles),
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Update your profile picture</p>
      </div>
    </div>
  );
};

export default ProfilePicUpdate;
