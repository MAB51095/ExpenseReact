import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { date, amount } = props;

  const [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle("Updated");
  };

  return (
    <div className="expense-item flex-center">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description flex-center">
        <h2 className="expense-item__title flex-center">{title}</h2>
        <div className="expense-item__amount flex-center">{amount}</div>
      </div>

      <button
        className="expense-item__button flex-center"
        onClick={updateTitle}
      >
        <h4>Update Description</h4>
      </button>
    </div>
  );
};

export default ExpenseItem;
