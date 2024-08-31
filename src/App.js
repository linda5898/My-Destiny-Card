import React from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
