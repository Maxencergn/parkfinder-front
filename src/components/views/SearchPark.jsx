/* eslint-disable indent */
import React, { useState, useContext } from 'react';
import { FaCity } from 'react-icons/fa';
import SkateparksContext from '../../context/SkateparksContext';
import './SearchPark.css';

function SearchPark() {
  const { skateparks } = useContext(SkateparksContext);
  const [searchValue, setSearchValue] = useState('');

  function handleValue(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="searchpark-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search a skatepark.."
          onChange={handleValue}
        />
      </form>
      <div className="search-skateparks">
        {searchValue === ''
          ? skateparks.map((skatepark) => (
              <div className="card" key={skatepark.id}>
                <img alt="" src={skatepark.urlImage} key={skatepark.id} />
                <h3>{skatepark.name}</h3>
                <p>
                  <FaCity />
                  {skatepark.place.city}
                </p>
                <button type="button">Details</button>
              </div>
            ))
          : skateparks
              .filter(
                (skatepark) =>
                  skatepark.place.city
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  skatepark.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map((skatepark) => (
                <div className="card" key={skatepark.id}>
                  <img alt="" src={skatepark.urlImage} key={skatepark.id} />
                  <h3>{skatepark.name}</h3>
                  <p>
                    <FaCity />
                    {skatepark.place.city}
                  </p>
                  <button type="button">Details</button>
                </div>
              ))}
      </div>
    </div>
  );
}

export default SearchPark;
