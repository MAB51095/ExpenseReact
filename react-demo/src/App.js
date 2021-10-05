import logo from "./logo.svg";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
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
  ]);

  const onAddExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevState) => {
      console.log([...prevState, newExpense]);
      return [...prevState, newExpense];
    });
  };

  return (
    <div className="App">
      <header className="App-header flex-center">
        <h2>Expenses</h2>
      </header>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
