import React, { useState, useContext } from "react";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";
import AuthContext from "../../../store/auth-context";

const DUMMY_EXPENSES = [];

const ExpenseContent = () => {
  const [expenses, setExpanses] = useState(DUMMY_EXPENSES);
  const authCtx = useContext(AuthContext);

  const addExpenseHandler = (expense) => {
    setExpanses((prevExpanses) => {
      return [expense, ...prevExpanses];
    });
  };
  
  return (
    <React.Fragment>
      {authCtx.isLoggedIn && (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      )}
    </React.Fragment>
  );
//   return (
//     <div>
//       <NewExpense onAddExpense={addExpenseHandler} />
//       <Expenses items={expenses} />
//     </div>
//   );
};

export default ExpenseContent;
