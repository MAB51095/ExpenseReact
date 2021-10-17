import React, { useState, useRef } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddExpense, onFormSwitch }) {
  const today = new Date().toISOString().split("T")[0];

  const months = [
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

  const enteredTitle = useRef("");
  const enteredDate = useRef("");
  const enteredAmount = useRef("");

  const AddExpense = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle.current.value,
      amount: (Math.round(enteredAmount.current.value * 100) / 100).toFixed(2),
      date: {
        month: months[new Date(enteredDate.current.value).getMonth()],
        day: new Date(enteredDate.current.value).getDate(),
        year: new Date(enteredDate.current.value).getFullYear(),
      },
    };

    onFormSwitch();

    onAddExpense(expenseData);
  };

  const Cancel = () => {
    onFormSwitch();
  };

  return (
    <form className="form flex-center" onSubmit={AddExpense}>
      <div className="new-expense__controls flex-center">
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Title</label>
          </div>
          <input ref={enteredTitle} type="text" required></input>
        </div>
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Date</label>
          </div>
          <input
            ref={enteredDate}
            type="date"
            min="2021-01-01"
            max={today}
            required
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <div className="label flex-center">
            <label>Amount</label>
          </div>
          <input
            ref={enteredAmount}
            type="number"
            min="0.01"
            step="any"
            required
          ></input>
        </div>
      </div>
      <span>
        <button type="submit" className="expense-form__button">
          Add Expense
        </button>
        <button type="reset" className="expense-form__button" onClick={Cancel}>
          Cancel
        </button>
      </span>
    </form>
  );
}

export default ExpenseForm;
