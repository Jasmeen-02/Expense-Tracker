import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormValid, setIsFormValid] = useState(true); // to handle form validation state

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Simple validation
    if (!enteredExpenseData.title || !enteredExpenseData.amount || !enteredExpenseData.date) {
      setIsFormValid(false); // Set to false if any required field is missing
      return;
    }

    // Reset validation state after successful submission
    setIsFormValid(true);

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString() // Unique ID generation
    };
    props.onAddExpense(expenseData); // Sending data to the parent component
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {!isFormValid && <p className="error-message">Please fill in all the fields correctly!</p>}
    </div>
  );
};

export default NewExpense;
