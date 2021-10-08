import React from "react";
import "./ExpenseItemDate.css";

const ExpenseItemDate = ({ date }) => {
  const { month, day, year } = date;

  return (
    <div className="expense-item__date flex-center">
      <div className="flex-center">
        {month},{day}
      </div>
      <div className="flex-center">{year}</div>
    </div>
  );
};

export default ExpenseItemDate;
