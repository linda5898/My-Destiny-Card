import React, { useState } from 'react';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Expense Submitted:', amount);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
