import React from 'react'

const Btn = ({text, action}: BtnProps) => {
  return (
    <button onClick={action}
    className='bg-primary text-white p-2 w-[100px] rounded-md shadow-md'>
        {text}
    </button>
  )
}

export default Btn