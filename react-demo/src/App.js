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
      <h2 className="header">Add New Expense</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <h2 className="header">Expense List</h2>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
