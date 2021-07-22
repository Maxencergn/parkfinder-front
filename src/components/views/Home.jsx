import { React } from 'react';
import './Home.css';
import SliderApi from '../commons/SliderApi';
import AddSearch from '../commons/AddSearch';

function Home() {
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
      <div>
        <AddSearch />
      </div>
      <div>
        <SliderApi />
      </div>
    </div>
  );
}

export default Home;
