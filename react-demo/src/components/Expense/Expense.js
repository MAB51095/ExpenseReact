import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expense({ expenses }) {
  if (expenses.length == 0)
    return (
      <div className="expense-item flex-center">
        There are no items to display
      </div>
    );

  return expenses.map((expense, id) => (
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
      status="Not Verified"
      key={id}
    />
  ));
}

export default Expense;
