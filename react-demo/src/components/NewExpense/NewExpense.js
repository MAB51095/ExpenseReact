import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const onAddExpenseHandler = (newExpense) => {
    onAddExpense(newExpense);
  };

  const [formSwitch, setFormSwitch] = useState(false);

  const onFormSwitchHandler = () => {
    setFormSwitch((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense__form flex-center flex-column">
      {!formSwitch && (
        <div>
          <button onClick={onFormSwitchHandler}>Add New Expense</button>
        </div>
      )}

      {formSwitch && (
        <ExpenseForm
          onAddExpense={onAddExpenseHandler}
          onFormSwitch={onFormSwitchHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
