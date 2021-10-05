import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const onAddExpenseHandler = (newExpense) => {
    onAddExpense(newExpense);
  };

  return (
    <div className="new-expense__form flex-center">
      <ExpenseForm onAddExpense={onAddExpenseHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
