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
   const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
 
   return (
     <form onSubmit={handleSubmit} className='form'>
       <h2>Add Expense</h2>
       
       <label>Expense:</label><br/>
       <input placeholder="Expense" 
              value={expense} 
              onChange={(e) => setExpense(capitalizeFirstLetter(e.target.value))} /><br />

       <label>Desciption:</label><br/>
       <input placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(capitalizeFirstLetter(e.target.value))} /><br />

       <label>Category:</label><br/>
       <input placeholder="Category" 
              value={category} 
              onChange={(e) => setCategory(capitalizeFirstLetter(e.target.value))} /><br />

       <label>Amount:</label><br/>
       <input type="number" 
       placeholder="Amount" 
       value={amount} 
       onChange={(e) => setAmount(e.target.value)} /><br />

       <label>Period:</label><br/>
       <input 
       type="date" 
       value={date} 
       onChange={(e) => setDate(capitalizeFirstLetter(e.target.value))} /><br />

        <button className='button-container' type="submit">Add</button>
     </form>
   );
    
}

export default ExpenseForm