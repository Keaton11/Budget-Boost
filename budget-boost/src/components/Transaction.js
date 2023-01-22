import budgetBoosterLogo from '../images/full-logo.jpg';
import React, { useState } from 'react';
import {TopBar, Navigation, Frame} from '@shopify/polaris';
import {
  CashDollarMajor,
  CreditCardMajor,
  BankMajor,
  HomeMajor,
} from '@shopify/polaris-icons';

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

  const navigationMarkup = (
    <Navigation location="./">
      <Navigation.Section
        items={[
          {
            url: '/',
            label: 'Home',
            icon: HomeMajor,
          },
          {
            url: '/income',
            label: 'Income',
            icon: CashDollarMajor,
          },
          {
            url: '/expenses',
            label: 'Expenses',
            icon: BankMajor,
          },
          {
            url: '/transactions',
            label: 'Transactions',
            icon: CreditCardMajor,
          },
        ]}
      />
    </Navigation>
  );

  const logo = {
    width: 175,
    topBarSource: budgetBoosterLogo,
  };

  const topBarMarkup = (
    <TopBar/>
  );

  return (
    <Frame
    topBar={topBarMarkup}
    logo={logo}
    navigation={navigationMarkup}
  >
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
    </Frame>
  );
}
}

export default Transactions;



