import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { title, date, amount } = props;

  // const [title, setTitle] = useState(props.title);

  // const updateTitle = () => {
  //   setTitle("Updated");
  // };

  return (
    <div className="expense-item flex-center">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description flex-center">
        <div className="expense-item__title flex-center">{title}</div>
        <div className="expense-item__amount flex-center">{amount}</div>
      </div>

      {/* <button
        className="expense-item__button flex-center"
        onClick={updateTitle}
      >
        Update Description
      </button> */}
    </div>
  );
};

export default ExpenseItem;
