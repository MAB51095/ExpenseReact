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
    <form className="form flex-center" onSubmit={AddExpense}>
      <div className="new-expense__controls flex-center">
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Title</label>
          </div>
          <input
            value={enteredInput.enteredTitle}
            type="text"
            onChange={titleHandler}
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Date</label>
          </div>
          <input
            value={enteredInput.enteredDate}
            type="date"
            min="2021-01-01"
            max={today}
            onChange={dateHandler}
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Amount</label>
          </div>
          <input
            value={enteredInput.enteredAmount}
            type="number"
            min="0.01"
            step="any"
            onChange={amountHandler}
          ></input>
        </div>
      </div>
      <button className="expense-form__button flex-center">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
