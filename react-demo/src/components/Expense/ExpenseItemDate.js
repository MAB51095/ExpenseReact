import React from "react";
import "./ExpenseItemDate.css";

const ExpenseItemDate = ({ date }) => {
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
  const month = months[date.getMonth() - 1];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="flex-center">
      <div className="expense-item__date flex-center">
        <div className="flex-center">
          {month},{day}
        </div>
        <div className="flex-center">{year}</div>
      </div>
    </div>
  );
};

export default ExpenseItemDate;
