import ExpenseItemDate from "./ExpenseItemDate";
import "../componentsCss/ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { title, date, amount } = props;

  const [status, setStatus] = useState(props.status);

  const updateStatus = () => {
    if (status == "Verified") setStatus("Not Verified");
    else setStatus("Verified");
  };

  return (
    <div className="expense-item flex-center">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description flex-center">
        <h2 className="expense-item__title flex-center">{title}</h2>
        <div className="expense-item__amount flex-center">{amount}</div>
      </div>
      <div className="expense-item__status flex-center" onClick={updateStatus}>
        {status}
      </div>
    </div>
  );
};

export default ExpenseItem;
