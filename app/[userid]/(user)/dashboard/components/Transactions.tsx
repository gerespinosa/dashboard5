import React from 'react';
import Image from 'next/image';

const Transactions = ({ transactions, startDate, endDate }: any) => {
 
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Filter the transactiosn by Date
  const filteredTransactions = transactions.filter((transaction) => {
    const createdAt = new Date(transaction.createdAt); 

    const createdAtOnlyDate = createdAt.toISOString().split('T')[0];

    const isInRange = createdAtOnlyDate >= startDateObj.toISOString().split('T')[0] &&
                      createdAtOnlyDate <= endDateObj.toISOString().split('T')[0];

    return isInRange;
  });

  // Get the transactions by category
  const groupedTransactions = filteredTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = []; // Initialize an array for each category
    }
    acc[transaction.category].push(transaction);
    return acc;
  }, {});

  return (
    <div className='flex gap-2'>
      {Object.keys(groupedTransactions).map((category) => (
        <div key={category} className='bg-primary min-w-[150px] w-fit rounded-md shadow-md p-4 text-white'>
          <div className='flex gap-2 justify-between'>
            <h3 className='text-xl text-white'>{category.toUpperCase()}</h3>
            <Image src={`/categories/${category}.svg`} width={24} height={24} alt={category} />
          </div>
          <div className='w-full flex justify-between'>
            <p>Total: </p>
            <p>
              {groupedTransactions[category].reduce((total, transaction) => total + transaction.amount, 0).toFixed(2)}€
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
