import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Transactions from './components/Transaction';

function App() {
  return (
    <div>
      <Topbar />
      <Expense />
      <Transactions />
      <Income />
      {/* <Navbar />  */}
    </div>
  );
}

export default App;
