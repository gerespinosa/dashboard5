import React from 'react'

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
        <div key={category}
        className='bg-primary rounded-md shadow-md p-4 text-white '>
          <h3 className='text-xl text-white'>{category}</h3>
          <p>Total: {groupedTransactions[category].toFixed(2)}€</p> 
        </div>
      ))}
    </div>
  );
};

export default Transactions;
