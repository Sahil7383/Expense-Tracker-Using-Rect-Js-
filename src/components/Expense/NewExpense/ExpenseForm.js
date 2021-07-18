import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enterdDate : '',
  // })

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle : event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
    // // setUserInput({
    // //   ...userInput,
    // //   enteredAmount : event.target.value,
    // // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount : event.target.value}
    // });
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate : event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterdDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
