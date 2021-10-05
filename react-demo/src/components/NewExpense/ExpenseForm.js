import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddExpense }) {
  const today = new Date().toISOString().split("T")[0];

  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });

  const titleHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const dateHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const amountHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const AddExpense = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredInput.enteredTitle,
      amount: enteredInput.enteredAmount,
      date: new Date(enteredInput.enteredDate),
    };

    setEnteredInput({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
    });

    onAddExpense(expenseData);
  };

  return (
    <form onSubmit={AddExpense}>
      <div className="new-expense__controls flex-center">
        <div className="new-expense__control flex-center">
          <label>Title</label>
          <input
            value={enteredInput.enteredTitle}
            type="text"
            onChange={titleHandler}
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <label>Date</label>
          <input
            value={enteredInput.enteredDate}
            type="date"
            min="2021-01-01"
            max={today}
            onChange={dateHandler}
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <label>Amount</label>
          <input
            value={enteredInput.enteredAmount}
            type="number"
            min="1.00"
            step="1.00"
            onChange={amountHandler}
          ></input>
        </div>
        <button className="expense-item__control flex-center">
          <h3>Add Expense</h3>
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
