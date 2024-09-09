import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import Button from "../Components/Button.js";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>JOhn Ayomide ABE</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          style={{ marginRight: "70px", width: "250px", height: "300px" }} // Adjust the width and height as needed
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>Introduction</b>
          </h1>
          <p>
            I'm a passionate <b></b>IT consultant and <b>front-end developer</b>
            <br></br>
            <br></br>
            with Passion for creating standout user experiences.<br></br>
            <br></br>
            I’m here to bring your vision to life with<b> precision</b> and{" "}
            <b>creativity</b>.
          </p>
          <br></br>

          <p>
            Enjoy my <b>code?</b> Buy me a virtual <b>coffee!</b> Hit{" "}
            <b>'Pay with Code'</b> to fuel my next coding sprint.
          </p>
          <br></br>
          <p>
            Every <b>cup counts</b> towards brewing better digital{" "}
            <b>experiences!</b>
          </p>
        </div>
        <Button />

        <Tilt>
          <img
            style={{ width: "350px" }}
            className="Avatar"
            src={Avatar}
            alt=""
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
