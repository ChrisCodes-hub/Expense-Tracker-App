import React from 'react'

  function ExpenseTable({ expenses, onDelete }) {
    return (
      <div>
        <h2>Expense List</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.expense}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() => onDelete(item.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
export default ExpenseTable