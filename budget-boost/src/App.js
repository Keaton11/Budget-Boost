import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Transaction from './components/Transaction';
import Menu from './components/Menu';
import MainMenu from './components/MainMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
            element={<Income />}
          />
          <Route
            path="/expenses"
            element={<Expense />}
          />
          <Route
            path="/transactions"
            element={<Transaction />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
