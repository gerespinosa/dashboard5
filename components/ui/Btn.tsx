import React from 'react'

const Btn = ({text, action, variant}: BtnProps) => {
  return (
    <button onClick={action}
    className={`
    ${variant === 'accent' ? 'bg-accent' : 'bg-primary'} 
    ${variant === 'large' ? 'w-[200px]' : 'w-[100px]' }
    text-white p-2 rounded-md shadow-md 
    hover:scale-105 transition-transform duration-300`}>
        {text}
    </button>
  )
}

export default Btn