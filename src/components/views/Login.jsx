/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import LoginContext from '../../context/LoginContext';
import './Login.css';

function Login() {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [loginInfos, setLoginInfos] = useState({
    userName: '',
    password: '',
  });
  const [signinInfos, setSigninInfos] = useState({
    userNameRegister: '',
    passwordRegister: '',
    city: '',
  });

  const { setIsConnected } = useContext(LoginContext);

  function LogIn(e) {
    e.preventDefault();
    axios
      .post(`${REACT_APP_BACKEND_URL}/api/users/login`, {
        userName: loginInfos.userName,
        password: loginInfos.password,
      })
      .then((response) => {
        if (response.data === 'Auth Successful') {
          setIsConnected(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function SignIn(e) {
    if (
      signinInfos.userNameRegister.length === 0 ||
      signinInfos.passwordRegister.length === 0 ||
      signinInfos.city.length === 0
    ) {
      alert('One of the input is empty');
    }
    e.preventDefault();
    axios
      .post(`${REACT_APP_BACKEND_URL}/api/users/register`, {
        userName: signinInfos.userNameRegister,
        password: signinInfos.passwordRegister,
        city: signinInfos.city,
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          alert('User created!');
        } else {
          console.log('ok', response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logHandle(e) {
    const test = { ...loginInfos };
    test[e.target.id] = e.target.value;
    setLoginInfos(test);
  }

  function signHandle(e) {
    const test = { ...signinInfos };
    test[e.target.id] = e.target.value;
    setSigninInfos(test);
  }

  return (
    <div className="Login">
      <div className="Login-presentation">
        <div className="Login-presentation-container-img">
          <img
            alt=""
            src="https://lndskt.com/wp-content/uploads/2017/01/landscate-logo-white-icon-klein-1.png"
          />
        </div>

        <div className="Login-presentation-container">
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
      <div className="sign-log">
        Sign in
        <form className="container-form-login" onSubmit={SignIn}>
          <p>User name</p>
          <input
            onChange={(e) => signHandle(e)}
            id="userNameRegister"
            type="text"
            name="name"
            placeholder="Username..."
            value={signinInfos.userName}
          />
          <p>Password</p>
          <input
            onChange={(e) => signHandle(e)}
            id="passwordRegister"
            type="password"
            name="urlImage"
            placeholder="password..."
            value={signinInfos.password}
          />
          <p>City</p>
          <input
            onChange={(e) => signHandle(e)}
            id="city"
            type="text"
            name="city"
            placeholder="City..."
            value={signinInfos.city}
          />
          <button className="searching-button" type="submit">
            Sign in
          </button>
        </form>
        or if you already have a account you can log in
        <form className="container-form-login" onSubmit={LogIn}>
          <p>User name</p>
          <input
            onChange={(e) => logHandle(e)}
            id="userName"
            type="text"
            name="name"
            placeholder="Username..."
            value={loginInfos.userName}
          />
          <p>Password</p>
          <input
            onChange={(e) => logHandle(e)}
            id="password"
            type="password"
            name="urlImage"
            placeholder="password..."
            value={loginInfos.password}
          />
          <button className="searching-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
