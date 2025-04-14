import React from 'react'

function searchBar({searchTerm,onSearchChange}) {
  return (
    <div>
        <input type="text"  
               placeholder="Search by expense name"
               value={searchTerm}
               onChange={(e) => onSearchChange(e.target.value)}
      className="search-input" />
    </div>
  )
}

export default searchBar