import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <Expense />
      {/* <Income /> */}
      {/* <Navbar />  */}
    </div>
  );
}

export default App;
