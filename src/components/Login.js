import React from "react";
import axios from "axios";
// import Carousel from './Carousel';
// import Profile from './Profile';
// import Carkeek from './carkeek.jpg';

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "377138841456-1n5tnk1f6d8taetaglppc2jpncd6q0v2.apps.googleusercontent.com";

const BASE_URL = "http://localhost:5000";

function Login(props) {
  console.log("User:", props.user);
  console.log("Login:", props);
  const onSuccess = (res) => {
    props.setUser(res.profileObj);
    console.log("Login Success: currentUser:", res.profileObj);
    console.log("Login Success: currentUser:", res);
    //send to db res.profileObj to backend, chk if user already exist query email address against db email, if not create new user based on profileobj given

    // const fetchData = () => {
    axios
      .post(`${BASE_URL}/buddy`, res.profileObj)

      .then((response) => {
        console.log("HERE should be response");
        console.log(response.data);

        //show them the whole page
        if (response.data.message !== "created new user") {
          //if true means that user is a return user
          props.setShowForm(true);
        }
      })
      .catch((err) => {
        console.log("This should be the errror");
      });
    // }
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.😢 `);
  };

  return (
    <div id="login-container">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
        scope="email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/calendar.events"
      />
      {/* <carousel/> */}
    </div>
  );
}

export default Login;
