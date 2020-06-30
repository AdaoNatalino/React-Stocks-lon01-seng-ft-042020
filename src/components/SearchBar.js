import React from 'react';

const SearchBar = ( { handleFilter, changeSortByLetter, changeSortByPrice, price, letter } ) => {

  return (
    <div>

      <strong>Sort by:</strong>
      {/* <label>
        <input type="radio" value="none" checked={letter} onChange={changeSortByLetter}/>
        None
      </label> */}
      <label>
        <input type="radio" value="Alphabetically" checked={letter} onChange={changeSortByLetter}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={price} onChange={changeSortByPrice}/>
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
