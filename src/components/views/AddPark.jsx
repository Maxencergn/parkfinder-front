/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import './AddPark.css';

function AddPark() {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [newParkInfos, setNewParkInfos] = useState({
    name: '',
    description: '',
    urlImage: '',
    address: '',
    city: '',
    postalCode: '',
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(`${REACT_APP_BACKEND_URL}/api/skateparks`, {
        name: newParkInfos.name,
        description: newParkInfos.description,
        urlImage: newParkInfos.urlImage,
        place: {
          adress: newParkInfos.address,
          city: newParkInfos.city,
          postalCode: newParkInfos.postalCode,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert('Skatepark created !');
      })
      .catch((error) => {
        alert(error);
      });
  }

  function handle(e) {
    const test = { ...newParkInfos };
    test[e.target.id] = e.target.value;
    setNewParkInfos(test);
  }

  return (
    <div className="addpark-container">
      <div className="img-search">
        <h1>You can Add a skatepark from here</h1>
      </div>
      <form className="container-form" onSubmit={submit}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          type="text"
          name="name"
          placeholder="Skatepark name..."
          value={newParkInfos.name}
        />
        <input
          onChange={(e) => handle(e)}
          id="urlImage"
          type="text"
          name="urlImage"
          placeholder="Skatepark url image..."
          value={newParkInfos.urlimage}
        />
        <input
          onChange={(e) => handle(e)}
          id="address"
          type="text"
          name="address"
          placeholder="Skatepark address (ex: 2 rue maréchal)..."
          value={newParkInfos.address}
        />
        <input
          onChange={(e) => handle(e)}
          id="city"
          type="text"
          name="city"
          placeholder="Skatepark city..."
          value={newParkInfos.city}
        />
        <input
          onChange={(e) => handle(e)}
          id="postalCode"
          type="number"
          name="postalCode"
          placeholder="Skatepark postal code..."
          value={newParkInfos.postalCode}
        />
        <textarea
          onChange={(e) => handle(e)}
          id="description"
          type="text"
          name="description"
          placeholder="Skatepark description..."
          value={newParkInfos.description}
        />
        <button className="searching-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPark;
