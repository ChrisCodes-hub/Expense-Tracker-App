import React,{useState} from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/searcBar'



function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const filteredExpenses = expenses.filter((item) =>
    item.expense.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
    <div className={darkMode ? "app dark" : "app"}>
           <button onClick={() => setDarkMode(!darkMode)}>
               {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
  
    <div className='main-container'>
      
    <div className='box'>
        <h1>Expense Tracker</h1>
     </div>

     <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>

    <div className='app-container'>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>

   </div>
   </div>
    </>
  )
}

export default App
