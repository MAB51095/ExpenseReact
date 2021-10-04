import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const today = new Date().toISOString().split("T")[0];

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const AddExpense = () => {
    console.log({ enteredTitle, enteredDate, enteredAmount });
  };

  return (
    <form action="#">
      <div className="new-expense__controls flex-center">
        <div className="new-expense__control flex-center">
          <label>Title</label>
          <input type="text" onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control flex-center">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max={today}
            onChange={dateHandler}
          ></input>
        </div>
        <div className="new-expense__control flex-center">
          <label>Amount</label>
          <input
            type="number"
            min="1.00"
            step="1.00"
            onChange={amountHandler}
          ></input>
        </div>
        <button
          className="expense-item__control flex-center"
          onClick={AddExpense}
        >
          <h3>Add Expense</h3>
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
