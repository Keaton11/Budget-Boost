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


function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction({ name, amount });
    setName('');
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={event => setAmount(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
}

export default Transactions;



