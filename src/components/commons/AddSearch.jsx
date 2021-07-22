import React from 'react';
import { useHistory } from 'react-router-dom';
import './AddSearch.css';

function AddSearch() {
  const history = useHistory();

  function handleClickAdd() {
    history.push('/addpark');
  }

  function handleClickSearch() {
    history.push('/searchpark');
  }
  return (
    <div className="first-add-find">
      <div className="addsearch-add">
        <h1>Want to add a skatepark ?</h1>
        <h3>Click on the button below</h3>
        <button
          className="searching-button"
          type="button"
          onClick={handleClickAdd}
        >
          Add a park
        </button>
      </div>
      <div className="addsearch-search">
        <h1>Want to Find a skatepark ?</h1>
        <h3>Click on the button below</h3>
        <button
          className="searching-button"
          type="button"
          onClick={handleClickSearch}
        >
          Search a park
        </button>
      </div>
    </div>
  );
}

export default AddSearch;
