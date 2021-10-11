import React from "react";
import NewExpense from "./NewExpense";

function AddNewExpense({ onAddExpense }) {
  const onAddExpenseHandler = (newExpense) => {
    onAddExpense(newExpense);
  };
  return (
    <div className="flex-center flex-column">
      <h2 className="header">Add New Expense</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} />
    </div>
  );
}

export default AddNewExpense;
