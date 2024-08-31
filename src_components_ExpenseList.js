import React from 'react';

function ExpenseList() {
  const expenses = [
    { id: 1, name: 'Groceries', amount: 50 },
    { id: 2, name: 'Rent', amount: 1200 }
  ];

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
