import React from "react";
import profilePic from "./profilepic.jpg";

let data = {
  name: "Negar Rahbar",
  aboutme:
    "I am currently a pre-final year student at The TU WIEN of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
  address: "Vienna",
  website: "https://nigorita.github.io"
};

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{data.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                <br></br>
                <span>{data.address}</span>
                <br></br>
                <span>{data.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
