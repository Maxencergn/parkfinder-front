import { React, useContext } from 'react';
import { FaCity } from 'react-icons/fa';
import SkateparksContext from '../../context/SkateparksContext';
import './SliderApi.css';

function SliderApi() {
  const { skateparks } = useContext(SkateparksContext);

  return (
    <div className="slider-container">
      <h1>Skateparks already added</h1>
      <div className="first-skateparks">
        <div className="first-skateparks-wrapper">
          {skateparks.map((skatepark) => (
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
    </div>
  );
}

export default SliderApi;
