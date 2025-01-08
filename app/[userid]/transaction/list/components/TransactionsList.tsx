import React from 'react'


const TransactionsList = ({transactions}) => {
  return (
    <div>
        {transactions.map((transaction, index) => {
            return (
                <div>{transaction?.desc}</div>
            )
        })}
    </div>
  )
}

export default TransactionsList