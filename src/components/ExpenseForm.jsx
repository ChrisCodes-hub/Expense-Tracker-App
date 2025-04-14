import React,{useState} from 'react'

function ExpenseForm({onAdd}) {
   const [expense, setExpense] = useState('');
   const [description, setDescription] = useState('');
   const [category, setCategory] = useState('');
   const [amount, setAmount] = useState('');
   const [date, setDate] = useState('');
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     const newExpense = {
       id: Date.now(), // gives unique id
       expense,
       description,
       category,
       amount,
       date,
     };
 
     onAdd(newExpense); // send this data to parent (App.js)
     
     // clear the form
     setExpense('');
     setDescription('');
     setCategory('');
     setAmount('');
     setDate('');
   };
 
   return (
     <form onSubmit={handleSubmit} className='form'>
       <h2>Add Expense</h2>
 
       <input placeholder="Expense" value={expense} onChange={(e) => setExpense(e.target.value)} /><br />
       <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
       <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} /><br />
       <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
 
       <button type="submit">Add</button>
     </form>
   );
    
}

export default ExpenseForm