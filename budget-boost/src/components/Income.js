import budgetBoosterLogo from '../images/full-logo.jpg';
import React, { useState } from 'react';
import {TopBar, Navigation, Frame, Card} from '@shopify/polaris';
import {
  CashDollarMajor,
  CreditCardMajor,
  BankMajor,
  HomeMajor,
} from '@shopify/polaris-icons';

export default function Income() {
  const [incomeItems, setIncomeItems] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  function addIncome(income) {
    setIncomeItems([...incomeItems, income]);
    setTotalIncome(totalIncome + income.amount);
  }

  return (
    <div>
      <h2>Income</h2>
      <ul>
        {incomeItems.map((income, index) => (
          <li key={index}>
            {income.name}: {income.amount}
          </li>
        ))}
      </ul>
      <h3>Total Income: {totalIncome}</h3>
      <IncomeForm addIncome={addIncome} />
    </div>
  );
}

function IncomeForm({ addIncome }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    addIncome({ name, amount });
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
      <button type="submit">Add Income</button>
    </form>
    </Frame>
  );
}