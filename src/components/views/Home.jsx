/* eslint-disable no-alert */
import { React, useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

function Home() {
  const [skateparks, setSkateparks] = useState([]);
  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/api/skateparks`)
      .then((response) => {
        setSkateparks(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <div className="first-presentation">
        <div className="first-presentation-container-img">
          <img
            alt=""
            src="https://lndskt.com/wp-content/uploads/2017/01/landscate-logo-white-icon-klein-1.png"
          />
        </div>

        <div className="first-presentation-container">
          <h1>Welcome to Park Finder</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
            eaque, laboriosam ex accusantium nemo quod pariatur distinctio
            assumenda non, vero dolores mollitia. Fugit sit, enim optio modi
            quidem fuga. Lorem ipsum dolor sit amet.
            <br />
            <br /> Omnis odit eaque, laboriosam ex accusantium nemo quod
            pariatur distinctio assumenda non, vero dolores mollitia. Fugit sit,
            enim optio modi quidem fuga. Lorem ipsum dolor sit amet consectetur
            adipisicing.
          </p>
        </div>
      </div>
      <div className="first-skateparks">
        {skateparks.map((skatepark) => (
          <div key={skatepark.id}>
            <p>{skatepark.name}</p>
          </div>
        ))}
      </div>
      <div className="first-add-find">bla</div>
    </div>
  );
}

export default Home;
