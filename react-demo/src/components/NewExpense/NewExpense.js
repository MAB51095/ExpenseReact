import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const onAddExpenseHandler = (newExpense) => {
    onAddExpense(newExpense);
  };

  const [formSwitch, setFormSwitch] = useState(false);

  const buttonClass = formSwitch
    ? "add-new-expense__button hide"
    : "add-new-expense__button ";
  const onFormSwitchHandler = () => {
    setFormSwitch((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense__form flex-center flex-column">
      <div>
        <button className={buttonClass} onClick={onFormSwitchHandler}>
          Add New Expense
        </button>
      </div>
      <ExpenseForm
        onAddExpense={onAddExpenseHandler}
        className={formSwitch ? "form flex-center" : "form flex-center hide"}
        onFormSwitch={onFormSwitchHandler}
      ></ExpenseForm>
    </div>
  );
}

export default NewExpense;
