import React, { useState } from "react";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";

const DUMMY_EXPENSES = [];

const ExpenseContent = () => {
  const [expenses, setExpanses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpanses((prevExpanses) => {
      return [expense, ...prevExpanses];
    });
  };
  
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default ExpenseContent;
