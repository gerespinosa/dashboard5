import React from 'react'
import Image from 'next/image';

const Transactions = ({ transactions }) => {

  const groupedTransactions = transactions.reduce((acc, transaction) => {

    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.amount;
    return acc;
  }, {});

  return (
    <div className='flex gap-2'>
      {Object.keys(groupedTransactions).map((category) => (
        // Category card
        <div key={category}
        className='bg-primary min-w-[150px] w-fit rounded-md shadow-md p-4 text-white '>
          <div className='flex gap-2 justify-between'>
            {/* Category title */}
            <h3 className='text-xl text-white'>{category.toUpperCase()}</h3>
            {/* Category icon */}
            <Image src={`/categories/${category}.svg`}
            width={24}
            height={24}
            alt={category} />
          </div>
          <div className='w-full flex justify-between'>
            <p>Total: </p> 
            <p>{groupedTransactions[category].toFixed(2)}€</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
