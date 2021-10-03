import logo from "./logo.svg";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";

function App() {
  const expenses = [
    {
      title: "Phone Repair",
      date: new Date(2021, 10, 3),
      amount: "1100.00",
    },
    {
      title: "Fund Transfer",
      date: new Date(2021, 10, 1),
      amount: "5000.00",
    },
  ];

  return (
    <div className="App">
      <header className="App-header flex-center">
        <h2>Expenses</h2>
      </header>

      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
