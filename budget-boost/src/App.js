import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Transaction from './components/Transaction';
import Menu from './components/Menu';
import MainMenu from './components/MainMenu';
import Categories from './components/Categories';
import budgetBoosterLogo from './images/full-logo.jpg';
import {TopBar, Navigation, Frame} from '@shopify/polaris';
import {
  CashDollarMajor,
  CreditCardMajor,
  BankMajor,
  HomeMajor,
  DataVisualizationMajor,
} from '@shopify/polaris-icons';

function App() {

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
            url: '/categories',
            label: 'Categories',
            icon: DataVisualizationMajor,
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
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainMenu />}
          />
          <Route
            path="/signin"
            element={<Menu />}
          />
          <Route
            path="/income"
            element={
              <Frame
              topBar={topBarMarkup}
              logo={logo}
              navigation={navigationMarkup}
            >
              <Income />
            </Frame>}
          />
          <Route
            path="/expenses"
            element={
              <Frame
              topBar={topBarMarkup}
              logo={logo}
              navigation={navigationMarkup}
            >
              <Expense />
            </Frame>}
          />
          <Route
            path="/categories"
            element={
              <Frame
              topBar={topBarMarkup}
              logo={logo}
              navigation={navigationMarkup}
            >
              <Categories />
            </Frame>}
          />
          <Route
            path="/transactions"
            element={
              <Frame
              topBar={topBarMarkup}
              logo={logo}
              navigation={navigationMarkup}
            >
              <Transaction />
            </Frame>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
