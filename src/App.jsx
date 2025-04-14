import React,{useState} from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'


function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  return (
    <div className='app-container'>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTable expenses={expenses} onDelete={deleteExpense} />
    </div>
  )
}

export default App
