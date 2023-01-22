import React, { useState } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name}: {transaction.amount}
          </li>
        ))}
      </ul>
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );



}

export default Transactions;



