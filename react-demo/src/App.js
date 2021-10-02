import logo from './logo.svg';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h2>Expenses</h2>
        
      </header>
      <ExpenseItem></ExpenseItem> 
      
    </div>
  );
}

export default App;
