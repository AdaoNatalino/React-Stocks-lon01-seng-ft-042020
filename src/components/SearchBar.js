import React from 'react';

const SearchBar = ( { handleFilter, sortByLetter, sortByPrice, price, letter } ) => {


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={letter} onChange={sortByLetter}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={!letter} onChange={sortByPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
