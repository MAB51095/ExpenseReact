import logo from "./logo.svg";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import DateFilterOptions from "./components/Expense/Filter/DateFilterOptions";

function App() {
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [expenses, setExpenses] = useState([
    {
      title: "Phone Repair",
      date: { month: months[9], day: 1, year: 2021 },
      amount: "1100.00",
    },
    {
      title: "Fund Transfer",
      date: { month: months[10], day: 10, year: 2021 },
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

      <div className="expenses flex-center">
        <Expense expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
