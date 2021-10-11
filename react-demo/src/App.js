import logo from "./logo.svg";
import Expense from "./components/Expense/Expense";
import AddNewExpense from "./components/NewExpense/AddNewExpense";
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
    {
      title: "Mobile Purchase",
      date: { month: months[10], day: 10, year: 2021 },
      amount: "5000.00",
    },
  ]);

  const [selectedFilterMonth, setSelectedFilterMonth] = useState("");

  const onAddExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevState) => {
      console.log([...prevState, newExpense]);
      return [...prevState, newExpense];
    });
  };

  const filterByDate = (event) => {
    setSelectedFilterMonth(event.target.value);
  };

  return (
    <div className="App">
      {/* <h2 className="header">Add New Expense</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} /> */}
      <AddNewExpense onAddExpense={onAddExpenseHandler} />

      <h2 className="header">Expense List</h2>
      <div className="expense-filter flex-center">
        Filter by month :
        <select onChange={filterByDate}>
          <DateFilterOptions months={months}></DateFilterOptions>
        </select>
      </div>

      <div className="expenses flex-center">
        <Expense
          expenses={expenses.filter(
            (e) =>
              e.date.month == selectedFilterMonth || selectedFilterMonth == ""
          )}
        />
      </div>
    </div>
  );
}

export default App;
